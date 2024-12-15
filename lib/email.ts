import { Order } from '@prisma/client'
import { prismaDB } from './prismal'
import { onGetOrderById } from '@/actions/orders'

export async function sendOrderConfirmationEmail(orderId:string) {

    const data = await onGetOrderById(orderId)

  try {
    // In a real application, you would use Resend API here
    if(data.order){

        console.log('Sending email to:', data.order?.customerEmail)
        // console.log('Email content:', sendOrderConfirmationEmail({
        //   customerName:data.order.customerName,
        //   bookName:data.order.book.name
        // }))
    }
  } catch (error) {
    console.error('Failed to send email:', error)
    throw error
  }
}