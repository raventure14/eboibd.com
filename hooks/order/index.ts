import { useState } from "react";

import {  PaymentStatus } from "@prisma/client";
import { sendOrderConfirmationEmail } from "@/lib/email";
import {  onUpdateOrderStatus } from "@/actions/orders";
import { EmailPayload, onSendPurchaseEmail } from "@/actions/email";
import { toast} from "react-hot-toast"

export function useOrderActions() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [loadingText, setLoadingText] = useState("")

  const updateOrderStatus = async (
    orderId: string,
    status: PaymentStatus,
    emailPayload?: EmailPayload
  ) => {
    try {
      // Update order status logic here
      setIsUpdating(true);
      setLoadingText("Updating order and payment status...")
      
      const updateResponse = await onUpdateOrderStatus({
        orderId,
        paymentStatus: status,
        orderStatus: status,
      });
      setLoadingText("Order status updated successfully")
      toast.success("Order status updated successfully")
      if (updateResponse.status !== 200) {
        return toast.error(updateResponse.message);
      }
      toast.success("Order status updated successfully")


      if (emailPayload) {
        setLoadingText("Sending email...")
        const emailResponse = await onSendPurchaseEmail(emailPayload);
        if(emailResponse.status !== 200) {
          toast.error("Something went wrong. Please send the email manually.")
        }else{
          setLoadingText("E-book has been delivered successfully!")

          toast.success("E-book has been delivered successfully!")
        }
        toast.success("E-book has been delivered successfully!")
      }
    } catch (error) {
      toast.error("Failed to update order status")
      console.error("Failed to update order status:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  const updatePaymentStatus = async (
    orderId: string,
    status: PaymentStatus
  ) => {
    setIsUpdating(true);
    try {
      // Update payment status logic here
      console.log(`Updating payment status for order ${orderId} to ${status}`);

      if (status === "CONFIRMED") {
        await sendOrderConfirmationEmail(orderId);
      }
    } catch (error) {
      console.error("Failed to update payment status:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  return {
    updateOrderStatus,
    updatePaymentStatus,
    isUpdating,
    loadingText,
  };
}
