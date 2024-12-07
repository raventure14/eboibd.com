"use client";

import { Menu, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hamberger() {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative w-10 h-10 rounded-full md:hidden"
    >
      <Menu className="w-5 h-5" />
    </Button>
  );
}