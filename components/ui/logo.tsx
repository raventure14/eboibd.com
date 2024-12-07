"use client";

import { Book } from "lucide-react";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
      <Book className="w-6 h-6 text-emerald-500" />
      <span>RA Venture</span>
    </Link>
  );
}