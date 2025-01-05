"use client";
import React from "react";
import { motion, Transition,  } from "framer-motion";
import { Button } from "../ui/button";
import { Rating } from "../ui/rating";
import { onCreateClick } from "@/actions/dayly-clicks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

type AnimationType = {
  x?:number|string, opacity?:number, y?:number|string; scale?:number
}
type Props = {
  isRating?: boolean;
  ctaText?: string;
  initial?:AnimationType;
  whileInview?:AnimationType,
  transition?:Transition
};
const CallToAction = ({
  isRating = true,
  ctaText = "এখনই আপনার কপি সংগ্রহ করুন",
  initial,
  whileInview,
  transition
}: Props) => {
  const router = useRouter()

  const handleOnClick = async () =>{
    const date = new Date()
     await onCreateClick({
      day:date.getDay(),
      month:date.getMonth(),
      year:date.getFullYear(),
      totalClicks:1,
    })
  }
  return (
    <div className="flex flex-col  px-3 items-center lg:items-start justify-start  gap-4">
      <motion.div
        initial={initial}
        whileInView={whileInview}
        transition={transition}
        className="w-full mx-auto flex items-center justify-center lg:justify-start font-semibold gap-3 whitespace-nowrap text-xs sm:text-base  "
      >
        <span className="text-heading">Actual price</span>{" "}
        <s className="text-red-500 font-semibold">TK. 600</s>
        <span className="text-heading">Offer price</span>{" "}
        <span className="text-cta font-semibold">TK. 169</span>
        <div
          className=" rotate-12 z-50 bg-yellow-400   rounded-full  flex flex-wrap items-center 
          justify-center h-16 w-16 text-[12px] shadow-card2"
        >
          {/* <span className="text-white "> Save </span>{" "}

          <span className="text-white "> 71% +</span> */}
           <Image
              src={"/discount.png"}
              alt="Discount upto 71%+"
              height={70}
              width={70}
              className="w-full object-fill origin-center rounded-full
          "
            />
        </div>
      </motion.div>

      <motion.div
        initial={initial}
        whileInView={whileInview}
        transition={transition}
        className="w-full flex justify-center md:justify-start relative mx-auto  "
      >
        
          <Link className="text-xs md:text-base w-[90%] md:w-auto bg-cta/90 hover:bg-cta/100 text-white px-6 sm:px-8 py-3 sm:py-3  sm:text-lg rounded-md transition-colors z-20 whitespace-nowrap" href={"/checkout/artificial-intelligence-chatgpt-prompt-engineering-কি-কেন-কিভাবে"} >{ctaText} - মাত্র 169 টাকায়!</Link>
      </motion.div>
      {isRating && (
        <motion.div
          initial={initial}
          whileInView={whileInview}
          transition={transition}
          className=" text-center flex justify-center items-center mx-auto md:mx-0 gap-3"
        >
          <span className="font-bold text-lg">100+</span>
          <Rating value={5} />
          <span className="text-gray-600">reviews</span>
        </motion.div>
      )}
    </div>
  );
};

export default CallToAction;
