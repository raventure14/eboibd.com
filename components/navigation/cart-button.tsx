"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  onClick?:() => void
}
export function CartButton({onClick}:Props) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative w-10 h-10 rounded-full"
      onClick={onClick}
    >
      <ShoppingCart className="w-5 h-5" />
    </Button>
  );
}