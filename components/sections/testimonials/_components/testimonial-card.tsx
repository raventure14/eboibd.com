"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  role: string;
  comment: string;
  rating: number;
  platform: "gmail" | "facebook";
  className?: string;
}

export function TestimonialCard({
  name,
  role,
  comment,
  rating,
  platform,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300",
        "border border-gray-100",
        className
      )}
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="flex flex-col">
          <span className="font-semibold text-heading">{name}</span>
          <span className="text-sm text-para">{role}</span>
        </div>
        <div className="ml-auto ">
          <Image
            src={
              platform === "gmail" ? "/icons/gmail.svg" : "/icons/facebook.svg"
            }
            alt={platform}
            width={50}
            height={50}
            className="opacity-80 "
          />
        </div>
      </div>
      <p className="text-para mb-4">{comment}</p>
      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-red-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
}
