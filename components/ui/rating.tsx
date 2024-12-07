"use client"

import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface RatingProps {
  value: number
  className?: string
}

export function Rating({ value, className }: RatingProps) {
  return (
    <div className={cn("flex items-center", className)}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            "w-5 h-5",
            i < value ? "text-red-500 fill-red-500" : "text-gray-300"
          )}
        />
      ))}
    </div>
  )
}