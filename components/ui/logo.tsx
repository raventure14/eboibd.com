"use client";

import { Book, BookOpen } from "lucide-react";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
      <BookOpen className="w-6 h-6 text-emerald-500" />
      <span>E-Boi</span>
    </Link>
  );
}