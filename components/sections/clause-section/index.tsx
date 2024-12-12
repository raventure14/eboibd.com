"use client";
import { motion } from "framer-motion";
import { ClauseCard } from "./_components/clause-card";
import { CLAUSES } from "@/constants/clauses";

export function ClauseSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="benefits">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#51e2de40_1px,transparent_1px),linear-gradient(to_bottom,#51e2de40_1px,transparent_1px)] bg-[size:20px_24px] -z-10" />
      <div className="container mx-auto z-20">
        <div className="text-center mb-16 z-40">
          <motion.h2
            initial={{ x: "100%", opacity: 0.01 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, ease: "linear" }}
            className="text-4xl font-bold z-40"
          >
            <span className="text-purple-600">কেন শুধুমাত্র </span>
            ডিজিটাল বই?
          </motion.h2>
          <motion.p  initial={{x: "-100%", opacity: 0.01 }}
            whileInView={{x: 0, opacity: 1 }}
            transition={{ duration: 0.2, ease: "linear" }} className="text-para font-semibold text-base md:text-lg  py-5 z-40">
            ডিজিটাল বই / ই-বুক পড়ার অনেক সুবিধা রয়েছে যা পাঠকদের জন্য সহজ এবং
            উপকারী।
          </motion.p>
        </div>

        <div className="flex justify-center flex-wrap gap-6 mb-12">
          {CLAUSES.map((audience) => (
            <ClauseCard
              key={audience.id}
              icon={audience.icon}
              title={audience.title}
              description={audience.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
