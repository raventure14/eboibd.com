"use client";
import { motion } from "framer-motion";
import { FEATURES } from "@/constants/features";
import { BookPreview } from "./_components/book-preview";
import { FeatureCard } from "./_components/feature-card";

export function FeaturesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden " id="about-book"  >
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 60, opacity: 0.1 }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.1, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-purple-600">বইটিতে</span>{" "}
            <span className="text-gray-900">কী রয়েছে?</span>
          </h2>
        </motion.div>

        <div className="w-full flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full lg:w-7/12">
            <motion.p
              initial={{ x: -50, opacity: 0.1 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1, ease: "easeIn" }}
              className="text-lg text-para max-w-3xl text-left"
            >
              এই বইটি আপনাকে শূন্য থেকে ChatGPT সম্পর্কে ধারণা দেবে। এটি ব্যবহার
              করে কিভাবে নিজের দক্ষতা বৃদ্ধি করা যায় এবং ব্যক্তিগত ও পেশাগত
              জীবনে কিভাবে নিজেকে আরও productive করে তোলা যায় তা শেখাবে। বাস্তব
              উদাহরণ ও সহজ নির্দেশিকার মাধ্যমে আপনি শিখবেন prompt কী, কীভাবে
              prompt লিখে কাঙ্ক্ষিত ফলাফল/উত্তর পাওয়া যায় এবং কীভাবে prompt
              mastery দক্ষতা অর্জন করা যায়। এছাড়াও, এই সম্পর্কিত bonus
              knowledge resources তো থাকছেই।
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
              <FeatureCard
                key={FEATURES[0].id}
                icon={FEATURES[0].icon}
                title={FEATURES[0].title}
                className="bg-custom-gradient from-[#ffeea015] to-[#ffa6852c]"
              />
              <FeatureCard
                key={FEATURES[1].id}
                icon={FEATURES[1].icon}
                title={FEATURES[1].title}
                className="bg-custom-gradient from-[#a8e6cf15] to-[#dcedc12c]"
              />
              <FeatureCard
                key={FEATURES[2].id}
                icon={FEATURES[2].icon}
                title={FEATURES[2].title}
                className="bg-custom-gradient from-[#ff8b9415] to-[#ffccc12c]"
              />
              <FeatureCard
                key={FEATURES[3].id}
                icon={FEATURES[3].icon}
                title={FEATURES[3].title}
                className="bg-custom-gradient from-[#c1cfff15] to-[#a8d5e22c]"
              />
              <FeatureCard
                key={FEATURES[4].id}
                icon={FEATURES[4].icon}
                title={FEATURES[4].title}
                className="bg-custom-gradient from-[#dab6fc15] to-[#f3c5ff2c]"
              />
              <FeatureCard
                key={FEATURES[5].id}
                icon={FEATURES[5].icon}
                title={FEATURES[5].title}
                className="bg-custom-gradient from-[#ffb3ba15] to-[#ffdfd22c]"
              />
            </div>
          </div>

          <motion.div
            initial={{ scale: 0.5, opacity: 0.1 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="w-full lg:w-5/12 flex justify-center"
          >
            <BookPreview
              src="/book.webp"
              alt="Artificial intelligence, chatGPT and prompt mastry"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
