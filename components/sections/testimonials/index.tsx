"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TestimonialCarousel } from "./_components/testimonial-carousel";

export function TestimonialsSection() {
  return (
    <section className="py-7 px-4 sm:px-6 lg:px-8 overflow-hidden bg-thin-yellow">
      <div className="container mx-auto">
        <div className="flex flex-col  items-center gap-4 mb-16">
          {/* Center - Image and Title */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative h-full w-full max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full blur-3xl opacity-30" />
              <Image
                src="/review-illustration.avif"
                alt="Readers Review"
                width={300}
                height={300}
                className="relative z-10 w-44 h-44 rounded-full"
                priority
              />
            </div>
          </motion.div>

          {/* Center - Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-center">
              <span className="text-heading">পাঠকরা</span>{" "}
              <span className="text-purple-600">কী বলছেন?</span>
            </h2>
            <p className="text-para text-lg leading-relaxed text-center">
              আমাদের বইটি পড়ে হাজারো পাঠক উপকৃত হয়েছেন। তাদের অভিজ্ঞতা জানুন
              এবং AI এর মাধ্যমে নিজের ক্যারিয়ার গড়ার পথে এগিয়ে যান।
            </p>
          </motion.div>
        </div>


         {/* Testimonials Carousel */}
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
         
          transition={{ duration: 0.2 }}
          className="py-10"
        >
          <TestimonialCarousel />
        </motion.div>
      </div>
    </section>
  );
}
