"use server"

import { prismaDB } from "@/lib/prismal"


export async function onGetResentOrders() {
    try {
        const recentOrders = await prismaDB.order.findMany({
            orderBy:{
                createdAt: "desc"
            },
            take:5
        })

        if(!recentOrders) return{
            status:404,
            message:"No recent orders found!"
        }

        return {
            status:200, 
            recentOrders
        }
    } catch (error) {
        console.log("onGetResentOrders-Error: ", error)
        return {
            status:500,
            message:"Something went wrong"
        }
    }
}