"use client";

import { cn } from "@/lib/utils";

interface StatCardProps {
  number: string;
  label: string;
  className?: string;
}

export function StatCard({ number, label, className }: StatCardProps) {
  return (
    <div className={cn(
      "bg-white rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300",
      "border border-purple-100 shadow-lg hover:shadow-xl",
      className
    )}>
      <div className="text-3xl font-bold text-purple-600 mb-2">{number}</div>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}