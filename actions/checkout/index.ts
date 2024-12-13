"use server"

import { prismaDB } from "@/lib/prismal"
import { Order } from "@prisma/client"

export type CheckoutPayload = {

    customerName: string;
    customerEmail: string;
    customerPhone?: string | undefined;
    transactionId: string;
    amount: number;
    bookId: string;
    paymentMethod:string;
    userAgreement:boolean
}
export const onCheckout = async( data:CheckoutPayload) => {
try {
    const newCheckout = await prismaDB.order.create({
        data
    })
    if(!newCheckout){
        return{
            status:400,
            message:"Something went wrong!",
            info:newCheckout
        }
    }
    return {
        status:201,
        message:"Checkout compoeted successfully"
    }
} catch (error) {
    
}
}