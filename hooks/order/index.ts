import { useState } from "react";

import {  PaymentStatus } from "@prisma/client";
import {  onUpdateOrderStatus } from "@/actions/orders";
import { EmailPayload, onSendPurchaseEmail } from "@/actions/email";
import toast from "react-hot-toast";

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
        return toast.error(updateResponse.message + " ✨ ");
      }


      if (emailPayload) {
        setLoadingText("Sending email...")
        const emailResponse = await onSendPurchaseEmail(emailPayload);
        console.log(emailResponse)
        if(emailResponse.status !== 200) {
          toast.error("Something went wrong. Please send the email manually.")
        }else{
          setLoadingText("E-book has been delivered successfully!")
          toast.success("E-book has been delivered successfully!")
        }
      }
    } catch (error) {
      console.error("Failed to update order status:", error);
      toast.error("Failed to update order status")
    } finally {
      setIsUpdating(false);
    }
  };

  

  return {
    updateOrderStatus,
    isUpdating,
    loadingText,
  };
}
