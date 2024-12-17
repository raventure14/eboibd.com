"use server";

import { prismaDB } from "@/lib/prismal";

export const getDashboardStats = async () => {
  try {
    const [
      confirmedOrders,
      pendingOrders,
      canceledOrders,
      failedOrders,
      clickAnalytics,
    ] = await Promise.all([
      prismaDB.order.findMany({
        where: {
          orderStatus: "CONFIRMED",
          paymentStatus:"CONFIRMED"
        },
      }),
      prismaDB.order.count({
        where: {
          orderStatus: "PENDING",
          paymentStatus:"PENDING"
        },
      }),
      prismaDB.order.count({
        where: {
          orderStatus: "CANCELD",
        },
      }),
      prismaDB.order.count({
        where: {
          orderStatus: "FAILED",
        },
      }),
      prismaDB.clicks.findMany({
        orderBy: {
          createdAt: "desc",
        },
      }),
    ]);

    // Accessing the total revenue amount from the aggregated result
    const totalRevenue = confirmedOrders.reduce(
      (sum, order) => sum + order.amount,
      0
    );

    const totalClicks = clickAnalytics.reduce(
      (acc, curr) => acc + curr.totalClicks,
      0
    );
    const conversionRate =
      confirmedOrders.length > 0
        ? ((confirmedOrders.length / totalClicks) * 100).toFixed(2)
        : 0;
    return {
      status: 200,
      data: {
        totalOrders: confirmedOrders.length,
        pendingOrders,
        canceledOrders,
        failedOrders,
        totalRevenue,
        conversion: conversionRate,
        totalClicks,
      },
    };
  } catch (error) {
    console.log("Error-GET-Dshboar-Stats: ", error);
  }
};
