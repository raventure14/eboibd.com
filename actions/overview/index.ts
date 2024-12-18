"use server"

import OrdersPage from "@/app/(dashboard)/dashboard/orders/page";
import { prismaDB } from "@/lib/prismal";
import { format, startOfDay, subDays } from "date-fns";

export const getDashboardOverview = async () => {
  try {
    const orders = await prismaDB.order.findMany({
      where: {
        orderStatus: "CONFIRMED",
      },
      orderBy: {
        createdAt: "asc",
      },
    });
    const dailyRevinue = orders.reduce((acc: any[], order: any) => {
      const date = format(startOfDay(order.createdAt), "MMM dd");
      const existing = acc.find((item) => item.date === date);

      if (existing) {
        existing.revenue += order.amount;
      } else {
        acc.push({ date, revenue: order.amount });
      }

      return acc;
    }, []);

    return {
        status:200,
        dailyRevinue
    }
  } catch (error) {
    console.log("Error-GET-Overview", error)
    return {
        status:500,
        message:"Something went wrong"
    }
  }
};
