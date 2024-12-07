"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import useCart from "@/store/cart";
import Image from "next/image";
import React, { useState } from "react";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const Cart = () => {
  const {isOpen, setIsOpen} = useCart((state) => state);
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={cn(
        "h-[calc(100vh-1.3rem)] md:h-[calc(100vh-5.5rem)]  fixed bottom-0 w-full md:w-80 right-0 bg-white bg-opacity-8 overflow-hidden z-50 shadow-card2 rounded-t-sm rounded-l-sm backdrop-blur-xl ",
        isOpen ? "flex flex-col" : "hidden"
      )}
    >
      <div className="w-full flex justify-between items-center border-b shadow-md px-2">
        <h2 className="text-highlight font-black text-center py-5 ">
          Your Cart
        </h2>

        <X className="text-para cursor-pointer hover:text-heading transition-all duration-200 ease-linear" onClick={() =>setIsOpen(!isOpen)} />
      </div>

      <div className="h-full flex flex-col justify-between pb-2">
        <div className="px-1">
          <div className="w-full flex justify-between items-center gap-1 px-2 py-4 border rounded-sm mt-4">
            <div className=" flex justify-center items-center border rounded-sm p-1 shadow-md ">
              <Image
                src={"/features/book.png"}
                alt="Know everything about ChatGPT"
                height={1000}
                width={1000}
                className="w-28 object-cover rounded-sm"
              />
            </div>
            <div className=" flex flex-col justify-start items-start h-full">
              <h2 className="text-heading px-4  font-semibold text-sm text-left">
                ChatGPT নিয়ে e-Book এর বিষয়বস্তু
              </h2>
              <div className="flex justify-start items-center gap-2 px-4">
                <span className="text-para text-sm font-semibold py-1">
                  74%+
                </span>
              </div>
              <div className="flex justify-between items-center gap-2 px-4 ">
                <span className="text-highlight text-base font-semibold">
                  ৳.১৬৯
                </span>
                <s className="text-para text-base font-semibold">৳.৬০০</s>
              </div>
            </div>
          </div>
        </div>

        <Link href={"/checkout"} className=" w-full mx-auto bg-cta/90 hover:bg-cta/100 text-white px-6 sm:px-8 py-3  g rounded-sm transition-colors z-20 text-center text-base md:text-lg lg:text-xl ">
          Checkout
        </Link>
      </div>
    </motion.div>
  );
};

export default Cart;
