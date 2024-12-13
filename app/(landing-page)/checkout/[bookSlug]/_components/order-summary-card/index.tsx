import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

type Props = {
  bookName:string;
  coverImage:string;
  imgAlt:string;
  price:number;
}
const OrderSummaryCard = ({bookName, coverImage, imgAlt, price}:Props) => {
  return (
    <Card className="p-6">
      <h1 className="text-2xl font-semibold text-[#2D2D2D] mb-6">Your order</h1>

      <div className="space-y-6">
        <div className="flex justify-between pb-2 border-b">
          <div className="text-[#4A4A4A] font-medium">Product</div>
          <div className="text-[#4A4A4A] font-medium">Subtotal</div>
        </div>

        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden">
              <Image
                src={coverImage}
                alt={imgAlt}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-[#2D2D2D] font-medium">
               {bookName}
              </h3>
              <p className="text-[#4A4A4A]">× 1</p>
            </div>
          </div>
          <div className="text-[#2D2D2D] font-medium">{price}.00₮</div>
        </div>

        <div className="flex justify-between py-4 border-t">
          <div className="text-[#4A4A4A] font-medium">Subtotal</div>
          <div className="text-[#2D2D2D] font-medium">{price}.00₮</div>
        </div>

        <div className="flex justify-between py-4 border-t text-lg">
          <div className="text-[#2D2D2D] font-semibold">Total</div>
          <div className="text-[#2D2D2D] font-semibold">{price}.00₮</div>
        </div>
      </div>
    </Card>
  );
};

export default OrderSummaryCard;
