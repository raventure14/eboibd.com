"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

interface ChartSkeletonProps {
  isLoading?: boolean
}

export default function ChartSkeleton({ isLoading = true }: ChartSkeletonProps) {
  const pulseAnimation = {
    initial: { opacity: 0.3 },
    animate: { opacity: 1 },
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  }

  if (!isLoading) return null

  return (

      <div className="space-y-4">
        {/* Title skeleton */}
        <motion.div
          className="h-8 w-24 bg-muted rounded-md"
          {...pulseAnimation}
        />
        
        {/* Chart area skeleton */}
        <div className="h-[300px] relative">
          {/* Grid lines */}
          <div className="absolute inset-0 grid grid-cols-1 grid-rows-4">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="border-t border-dashed border-muted-foreground/20"
                {...pulseAnimation}
                transition={{
                  ...pulseAnimation.transition,
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
          
          {/* Y-axis labels skeleton */}
          <div className="absolute left-0 inset-y-0 w-16 flex flex-col justify-between">
            {[1000, 750, 500, 250, 0].map((_, i) => (
              <motion.div
                key={i}
                className="h-4 w-12 bg-muted rounded-md"
                {...pulseAnimation}
                transition={{
                  ...pulseAnimation.transition,
                  delay: i * 0.15
                }}
              />
            ))}
          </div>
          
          {/* Line chart skeleton */}
          <div className="absolute left-20 right-4 top-4 bottom-8">
            <svg className="w-full h-full">
              <motion.path
                d="M 0 20 C 100 20, 200 50, 300 100 C 400 150, 500 200, 600 220"
                fill="none"
                stroke="hsl(var(--muted))"
                strokeWidth="2"
                {...pulseAnimation}
                transition={{
                  ...pulseAnimation.transition,
                  duration: 1.5
                }}
              />
              {/* Data points */}
              {[0, 600].map((x, i) => (
                <motion.circle
                  key={i}
                  cx={x}
                  cy={i === 0 ? 20 : 220}
                  r="4"
                  fill="hsl(var(--muted))"
                  {...pulseAnimation}
                  transition={{
                    ...pulseAnimation.transition,
                    delay: i * 0.2
                  }}
                />
              ))}
            </svg>
          </div>
          
          {/* X-axis labels skeleton */}
          <div className="absolute bottom-0 inset-x-20 flex justify-between">
            {["Dec 19", "Dec 21"].map((_, i) => (
              <motion.div
                key={i}
                className="h-4 w-16 bg-muted rounded-md"
                {...pulseAnimation}
                transition={{
                  ...pulseAnimation.transition,
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
        </div>
      </div>

  )
}

