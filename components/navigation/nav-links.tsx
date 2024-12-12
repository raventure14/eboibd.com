"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about-book", label: "About Book" },
  { href: "#benefits", label: "Benefits" },
  { href: "#", label: "E-books" },
];

export function NavLinks() {
  return (
    <nav className="hidden md:flex flex-col md:flex-row items-center gap-8">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-gray-600 hover:text-gray-900 transition-colors",
            "text-base font-medium"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}