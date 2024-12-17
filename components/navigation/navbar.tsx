"use client";

import { Logo } from "@/components/ui/logo";
import { NavLinks } from "@/components/navigation/nav-links";
import { CartButton } from "@/components/navigation/cart-button";
import { Hamberger } from "./hambarger";
import useCart from "@/store/cart";

export function Navbar() {
  const {isOpen, setIsOpen} = useCart((state) =>state)
  return (
    <header className="fixed top-0 md:top-5 left-0 right-0 z-40 ">
      <div className="container mx-auto px-4 bg-white  shadow-nav rounded-md">
        <div className="flex items-center justify-between h-16">
          <Logo className="h-16" />
          <NavLinks />
          <div className="flex justify-between items-center gap-2">
            <CartButton onClick={() =>setIsOpen(!isOpen)} />
            <Hamberger />
          </div>
        </div>
      </div>
    </header>
  );
}
