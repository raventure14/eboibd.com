"use client";
import { motion } from "framer-motion";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ClauseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function ClauseCard({
  icon: Icon,
  title,
  description,
  className,
}: ClauseCardProps) {
  return (
    <motion.article
      initial={{
        scale: 0,
      }}
      whileInView={{
        scale: 1,
      }}
      transition={{
        duration: 0.2,
        ease: "linear",
      }}
      className={cn(
        "bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 z-30 justify-between items-center flex flex-col",
        "border border-purple-100/20 backdrop-blur-sm max-w-[496px]",
        className
      )}
    >
      <motion.div
        initial={{ y: -30, opacity: 0.1 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.1, delay: 0.1 }}
        className="mx-auto bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-4"
      >
        <Icon className="w-8 h-8 text-purple-600" />
      </motion.div>
      <motion.h3
        initial={{ x: -40, opacity: 0.1 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.1, delay: 0.2 }}
        className="text-center text-xl font-semibold text-heading mb-3 md:whitespace-nowrap"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ x: -60, opacity: 0.1 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.1, delay: 0.3 }}
        className="text-center text-para leading-relaxed"
      >
        {description}
      </motion.p>
    </motion.article>
  );
}
