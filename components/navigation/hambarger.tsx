"use client";

import { Menu, ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import useNavigation from "@/store/navigation";

export function Hamberger() {
  const {isOpen, setIsOpen} = useNavigation()
  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative w-10 h-10 rounded-full md:hidden"
      onClick={() => setIsOpen()}
    >
      {isOpen ? (<X className="w-5 h-5" />):<Menu className="w-5 h-5" />}
      
    </Button>
  );
}