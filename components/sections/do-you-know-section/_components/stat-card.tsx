"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCardProps {
  number: string;
  label: string;
  className?: string;
}

export function StatCard({ number, label, className }: StatCardProps) {
  return (
    <motion.div
      initial={{

        opacity: 0.1,
      }}
      whileInView={{

        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className={cn(
        "bg-white rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300",
        "border border-purple-100 shadow-lg hover:shadow-xl",
        className
      )}
    >
      <div className="text-3xl font-bold text-purple-600 mb-2">{number}</div>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
}
