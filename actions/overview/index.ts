"use server";

import { prismaDB } from "@/lib/prismal";
import { format, startOfDay } from "date-fns";


export const getDashboardOverview = async () => {
  try {
    const dailyOverview = await prismaDB.order.groupBy({
      by: ["createdAt"], // Group by the createdAt field
      where: {
        orderStatus: "CONFIRMED", // Filter orders by status
      },
      _sum: {
        amount: true, // Sum of order amounts
      },
      _count: {
        id: true, // Count of orders
      },
    });
    const dailyRevenue = dailyOverview.reduce(
      (acc: any[], order: any, index) => {
        const date = format(startOfDay(order.createdAt), "MMM dd");
        const existing = acc.find((item) => item.date === date);
        let count = 1;
        if (existing) {
          existing.revenue += order._sum.amount;
          existing.count = existing.count+1
         
        } else {
          acc.push({ date, revenue: order._sum.amount, count });
          
        }
        return acc;
      },
      []
    );

    return {
      status: 200,
      dailyRevenue,
    };
  } catch (error) {
    console.error("Error-GET-Overview:", error);
    return {
      status: 500,
      message: "Something went wrong",
    };
  }
};
