"use server";

import { prismaDB } from "@/lib/prismal";

export const getDashboardStats = async () => {

    try {
        const [
          confirmedOrders,
          canceledOrders,
          failedOrders,
          clickAnalytics
        ] = await Promise.all([
          prismaDB.order.findMany({
            where: {
              status: 'CONFIRMED',
            },
            include:{
                payment:{
                    select:{
                        amount:true
                    }
                }
            }

          }),
          prismaDB.order.count({
            where: {
              status: 'CANCELD',
            },
          }),
          prismaDB.order.count({
            where: {
              status: 'FAILED',
            },
          }),
         prismaDB.clicks.findMany({
          orderBy:{
            createdAt:"desc"
          }
         })
        ]);
    
        // Accessing the total revenue amount from the aggregated result
        const totalRevenue = confirmedOrders.reduce((sum, order) => sum + order.payment.amount, 0);
    
        const totalClicks = clickAnalytics.reduce((acc, curr) => acc + curr.totalClicks, 0);
        const conversionRate =
          confirmedOrders.length > 0 ? ((confirmedOrders.length / totalClicks) * 100).toFixed(2) : 0;
        console.log(`Confirmed Orders: ${confirmedOrders}`);
        console.log(`Canceled Orders: ${canceledOrders}`);
        console.log(`Failed Orders: ${failedOrders}`);
        console.log(`Total Revenue: $${totalRevenue}`);
        return {
            status:200,
            data:{
                totalOrders:confirmedOrders.length,
                canceledOrders,
                failedOrders,
                totalRevenue,
                conversion:conversionRate,
                totalClicks
                
            }
        }
  } catch (error) {
    console.log("Error-GET-Dshboar-Stats: ", error)

  }
}
