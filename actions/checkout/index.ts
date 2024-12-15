"use server"

import { prismaDB } from "@/lib/prismal"
import { PaymentStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
export type PaymentMethod = "bkash"|"nagad"
export type CheckoutPayload = {

    customerName: string;
    customerEmail: string;
    customerPhone?: string | undefined;
    transactionId: string;
    amount: number;
    bookId: string;
    paymentMethod:PaymentMethod;
    userAgreement:boolean;
    orderStatus:PaymentStatus
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
    revalidatePath("/orders")
    return {
        status:201,
        message:"Checkout compoeted successfully"
    }
} catch (error) {
    
}
}