import { useState } from 'react'

import { Order, PaymentStatus } from '@prisma/client'
import { sendOrderConfirmationEmail } from '@/lib/email'

export function useOrderActions() {
  const [isUpdating, setIsUpdating] = useState(false)

  const updateOrderStatus = async (orderId: string, status: PaymentStatus) => {
    setIsUpdating(true)
    try {
      // Update order status logic here
      console.log(`Updating order ${orderId} status to ${status}`)
    } catch (error) {
      console.error('Failed to update order status:', error)
    } finally {
      setIsUpdating(false)
    }
  }

  const updatePaymentStatus = async (orderId:string) => {
    setIsUpdating(true)
    try {
      // Update payment status logic here
      
      if (status === 'CONFIRMED') {
        await sendOrderConfirmationEmail(orderId)
      }
    } catch (error) {
      console.error('Failed to update payment status:', error)
    } finally {
      setIsUpdating(false)
    }
  }

  return {
    updateOrderStatus,
    updatePaymentStatus,
    isUpdating
  }
}