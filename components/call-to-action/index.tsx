"use client";
import React from "react";
import { motion, Transition,  } from "framer-motion";
import { Button } from "../ui/button";
import { Rating } from "../ui/rating";

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
  return (
    <div className="flex flex-col  items-start justify-start  gap-4">
      <motion.div
        initial={initial}
        whileInView={whileInview}
        transition={transition}
        className="w-full mx-auto flex items-center justify-center lg:justify-start font-semibold gap-3 whitespace-nowrap "
      >
        <span className="text-heading">Actual price</span>{" "}
        <s className="text-red-500 font-semibold">TK. 600</s>
        <span className="text-heading">Offer price</span>{" "}
        <span className="text-cta font-semibold">TK. 169</span>
        <div
          className=" rotate-12 z-50 bg-yellow-400   rounded-full  flex flex-col items-center 
          justify-center h-10 w-10 text-[12px] shadow-card2"
        >
          <span className="text-white text-[10px]"> Save </span>{" "}
          <span className="text-white text-[10px] "> 74% +</span>
        </div>
      </motion.div>

      <motion.div
        initial={initial}
        whileInView={whileInview}
        transition={transition}
        className="w-full relative "
      >
        <Button className=" text-sm md:text-base w-[90%] md:w-auto bg-cta/90 hover:bg-cta/100 text-white px-6 sm:px-8 py-5 sm:py-6  sm:text-lg rounded-md transition-colors z-20">
          {ctaText} - মাত্র 169 টাকায়!
        </Button>
      </motion.div>
      {isRating && (
        <motion.div
          initial={initial}
          whileInView={whileInview}
          transition={transition}
          className="flex items-center mx-auto md:mx-0 gap-3"
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