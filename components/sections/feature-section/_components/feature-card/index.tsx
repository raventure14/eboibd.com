"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: string;
  title: string;
  className?: string;
}

export function FeatureCard({ icon, title, className }: FeatureCardProps) {
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
        ease: "easeInOut",
      }}
      className={cn("bg-white rounded-xl p-6 shadow-card2", className)}
    >
      <motion.div
        initial={{ y: -30, opacity: 0.1 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        className=" h-16 mb-4 relative w-full flex justify-center items-center"
      >
        <Image
          src={icon}
          alt={title}
          width={80}
          height={80}
          className="object-contain"
        />
      </motion.div>
      <motion.h3
        initial={{ x: -40, opacity: 0.1 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.3 }}
        className="text-center text-lg lg:text-xl font-medium text-para mt-2"
      >
        {title}
      </motion.h3>
    </motion.article>
  );
}
