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

export const onGetOrderById =async (id:string) =>{
    try {
        const order = await prismaDB.order.findFirst({
            where:{
                id
            },
            include:{
               book:true 
            }
        })
        if(!order){
            return {
                status:404,
                message:"No order found!"
            }
        }
        return {
            status:200,
            order
        }
    } catch (error) {
        console.log("onGetOrderById-Error: ", error)
        return {
            status:500,
            message:"Something went wrong!"
        }
    }
}

export async function onGetOrders({limit=10, currentPage=1}:{limit?:number, currentPage?:number}) {

    try {
        const skip = (currentPage - 1) * limit
        const orders = await prismaDB.order.findMany({
            orderBy:{
                createdAt: "desc"
            },
            include:{
                book:{
                    select:{
                        name:true,
                        id:true,
                        slug:true
                    }
                },
                
            },
            take:limit,
            skip:skip
        })

        if(!orders || orders.length <=0) return{
            status:404,
            message:"No recent orders found!"
        }

        return {
            status:200, 
            orders
        }
    } catch (error) {
        console.log("onGetResentOrders-Error: ", error)
        return {
            status:500,
            message:"Something went wrong"
        }
    }
}