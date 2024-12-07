"use client";
import { motion } from "framer-motion";

import { AudienceCard } from "./_components/audience-card";
import CallToAction from "@/components/call-to-action";
import { AUDIENCES } from "@/constants/audiences";

export function AudienceSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-thin-yellow/75 to-thin-yellow/100 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 60, opacity: 0.1 }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">
            এই বইটি <span className="text-purple-600">কাদের জন্য?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {AUDIENCES.map((audience) => (
            <AudienceCard
              key={audience.id}
              icon={audience.icon}
              title={audience.title}
              description={audience.description}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <CallToAction
            isRating={false}
            initial={{ y: 50, opacity: 0 }}
            whileInview={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "linear" }}
          />
        </div>
      </div>
    </section>
  );
}
