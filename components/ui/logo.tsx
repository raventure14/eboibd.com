"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function Logo({className}:{className?:string}) {
  return (
    <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
      {/* <BookOpen className="w-6 h-6 text-emerald-500" /> */}
      <Image src={"/brand/logo.png"} alt="Eboibd.com" className={cn("w-auto h-28 drop-shadow-md object-cover ", className)} height={28} width={28} />
    </Link>
  );
}