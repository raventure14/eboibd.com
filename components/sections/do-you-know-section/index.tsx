"use client";

import { motion } from "framer-motion";
import { BookText, Bot, Brain, TrendingUp } from "lucide-react";
import { StatCard } from "./_components/stat-card";
import CallToAction from "@/components/call-to-action";

export function DoYouKnowSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ scale: 0, opacity: 0.1 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "linear" }}
            className="text-4xl font-bold mb-6"
          >
            <span className="text-heading">আপনি কি </span>
            <span className="text-purple-600">জানেন ?</span>{" "}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* AI Impact Section */}
          <motion.div
            initial={{
              scale: 0,
              opacity: 0.01,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              ease: "linear",
            }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-purple-100 flex flex-col justify-between"
          >
            <div className="">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Bot className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold">AI এর প্রভাব</h3>
              </div>
              <p className="text-para leading-relaxed mb-6">
                কৃত্রিম বুদ্ধিমত্তা (AI) প্রযুক্তির দ্রুত উন্নতি এবং এর ব্যাপক
                বাস্তবায়ন সাম্প্রতিক বছরগুলোতে চাকরি বাজারে বিপুল পরিবর্তন
                নিয়ে এসেছে। AI শুধু নতুন কর্মসংস্থান সৃষ্টি করেছে, পাশাপাশি
                অনেক পুরানো চাকরির চাহিদা কমিয়ে দিয়েছে। McKinsey Global
                Institute এর একটি রিপোর্ট অনুযায়ী, আগামী দুই দশকে AI প্রযুক্তির
                কারণে প্রায় ৪০% চাকরি অটোমেটেড হয়ে যেতে পারে, যা লাখ লাখ
                মানুষের জন্য কর্মসংস্থান সংকট সৃষ্টি করবে। তবে, AI কখনোই
                পুরোপুরি মানুষের স্থান নেবে না; বরং এটি মানুষের কাজকে সহজ করবে,
                যদি তারা AI এর সঠিক ব্যবহার শিখতে পারে। এ কারণে, ডিজিটাল
                সাক্ষরতা (digital literacy) এখন একটি অপরিহার্য দক্ষতা হয়ে
                উঠেছে। যারা AI এর কার্যকারিতা জানে না, তারা ভবিষ্যতে
                কর্মসংস্থানে টিকে থাকতে পারবে না। AI-কে দক্ষভাবে ব্যবহারের
                মাধ্যমে একজন ব্যক্তি তার পেশাগত জীবনে অনেক বড় সাফল্য অর্জন করতে
                পারে।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <StatCard
                number="40%"
                label="চাকরি অটোমেশনের সম্ভাবনা"
                className="bg-purple-50"
              />
              <StatCard
                number="10X"
                label="দক্ষতা বৃদ্ধির সুযোগ"
                className="bg-blue-50"
              />
            </div>
          </motion.div>

          {/* Digital Books Impact Section */}
          <motion.div
            initial={{
              scale: 0,
              opacity: 0.01,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              ease: "linear",
            }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-purple-100 flex flex-col justify-between"
          >
            <div className="w-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-purple-100 p-3 rounded-full">
                  <BookText className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold">
                  ডিজিটাল বইয়ের প্রভাব
                </h3>
              </div>
              <p className="text-para leading-relaxed  mb-6">
              প্রযুক্তিনির্ভর এই যুগের কর্মব্যস্ত জীবনে ডিজিটাল বই এখন অপরিহার্য হয়ে উঠেছে।
              । ডিজিটাল বই এখন বিশ্বের এক একটি অংশে তথ্য প্রাপ্তি এবং
                শিক্ষা অর্জনের সবচেয়ে সহজ ও সাশ্রয়ী মাধ্যম হিসেবে পরিচিত। Pew
                Research Center এর একটি সমীক্ষায় বলা হয়েছে, ২০১৯ সালে
                আমেরিকায় ৩০% মানুষ নিয়মিত ই-বুক পড়েন, যা পূর্ববর্তী বছরের
                তুলনায় উল্লেখযোগ্য বৃদ্ধি। ই-বুকের মাধ্যমে পাঠকরা যে কোন সময়,
                যে কোন স্থানে তাদের প্রয়োজনীয় তথ্য এবং জ্ঞান সংগ্রহ করতে
                পারেন, যা শুধু শিক্ষার্থীদের জন্য নয়, সাধারণ পাঠকদের জন্যও
                সুবিধাজনক। ডিজিটাল বইয়ের সুবিধা হলো এটি শুধু স্থান ও সময়ের
                সীমাবদ্ধতা দূর করে না, বরং পাঠকদের জন্য জ্ঞানের ব্যাপকতা ও
                সাশ্রয়িতা নিশ্চিত করে। AI এবং ডিজিটাল বই একসাথে কাজ করে, জ্ঞান
                অর্জনের এবং শেখার পদ্ধতিকে আরো দ্রুত, সহজ এবং উন্নত করে তুলছে।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <StatCard
                number="30%"
                label="নিয়মিত ই-বুক পাঠক"
                className="bg-green-50"
              />
              <StatCard
                number="24/7"
                label="যেকোনো সময় অ্যাক্সেস"
                className="bg-yellow-50"
              />
            </div>
          </motion.div>
        </div>

        <div className="my-5 flex justify-center">
          <CallToAction
            isRating={false}
            ctaText="আজই পড়া শুরু করুন"
            initial={{
              scale: 0,
              opacity: 0.01,
            }}
            whileInview={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              ease: "linear",
            }}
          />
        </div>
      </div>
    </section>
  );
}
