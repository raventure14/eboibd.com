"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FAQItem from "./_components/faq-item";

const faqData = [
  {
    question: "ইবুক টি কি যে কোনো ডিভাইসে সাপোর্ট করবে?",
    answer:
      "জ্বি। ইবুক টি pdf format-এ রয়েছে, তাই আপনি যে কোনো স্মার্টফোন, ল্যাপটপ, ডেস্কটপ কিংবা ই-বুক রিডারে ওপেন করে পড়তে পারবেন।",
  },
  {
    question: "পেমেন্টের পরে ই-বুক এর এক্সেস পাবো কিভাবে?",
    answer:
      "আপনি পেমেন্ট কমপ্লিট করে কনফার্ম করার পরবর্তী ১০ ঘন্টার মধ্যেই আপনার দেয়া email এর inbox-এ একটি email পাবেন। সে mail-এ দেয়া ডাউনলোড লিংকে ক্লিক করলেই আপনাকে নিয়ে যাবে download page-এ, সেখান থেকে download  করে পড়া শুরু করে দিতে পারেন আপনার ই-বুক টি। বি:দ্র: inbox-এ  খুঁজে না পেলে spam folder চেক করবেন। (পেমেন্ট প্রক্রিয়া সম্পন্ন হবার ১০ ঘন্টার মধ্যে যদি কোনো email না পান তবে আমাদের support system ba social media te knock korben.",
  },
  {
    question: "ই-বুক টি ওপেন করতে কি কোনো নির্দিষ্ট Apps/software লাখবে?",
    answer:
      "ই-বুক টি pdf format-এ আছে। খুব সহজেই যে কোনো ডিভাইসেই এটা ওপেন করে পড়তে পারবেন। মোটামুটি সব ডিভাইসেই by default pdf সাপোর্ট করে এমন Apps/software থাকে। তবুও যদি না থাকে তাহলে একটি pdf reader ডাউনলোড করে নিন & শুরু করুন আপনার বই পড়া।",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16 md:py-24 z-30"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">FAQ/সচরাচর জিজ্ঞাসা</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
