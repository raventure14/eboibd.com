"use client"
import { onGetBook } from "@/actions/book";
import BillingCard from "@/app/(landing-page)/checkout/[bookSlug]/_components/billing-card";
import OrderSummaryCard from "@/app/(landing-page)/checkout/[bookSlug]/_components/order-summary-card";
import PaymentCard from "@/app/(landing-page)/checkout/[bookSlug]/_components/payment-card";
import { useCheckoutForm } from "@/hooks/checkout";
import { Book } from "@prisma/client";
import { LoaderIcon } from "lucide-react";
import React, { useEffect, useState } from "react";


const CheckoutForm =  () => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const [book, setBook] = useState<Book|undefined>(undefined)

  const {register, errors, isPending, onHandleChekcout,setValue } = useCheckoutForm(book)

  useEffect(() => {
    async function getBookData() {
      try {
        
        const response = await onGetBook()
        if(response.status === 200){
          setBook(response.book)
        }
        
        setIsMounted(true)
      } catch (error) {
        console.log(error)
      } finally {
        setIsMounted(true)
      }
    }
    getBookData()
  },[])

  if(!isMounted) return (
    <div className="min-h-[calc(100vh-5rem)] w-full flex justify-center items-center" >
      <LoaderIcon className="animate-spin h-20 w-20 " />
    </div>
  )
  return (
    <form className="grid lg:grid-cols-2 gap-6 h-full w-full mx-auto" onSubmit={onHandleChekcout} >
      {/* Left Column - Order Summary and Billing Details */}
      <div className="space-y-6 h-auto">
        {/* Order Summary Card */}
        <OrderSummaryCard
          bookName={book?.name!}
          coverImage={book?.image!}
          imgAlt={book?.name!}
          price={book?.offerPrice!}
        />

        {/* Billing Details Card */}
        <BillingCard register={register} errors={errors}/>
      </div>

      {/* Right Column - Payment Details */}
      <PaymentCard register={register} errors={errors} setValue={setValue} loading={isPending} amount={book?.offerPrice!} />
    </form>
  );
};

export default CheckoutForm;
