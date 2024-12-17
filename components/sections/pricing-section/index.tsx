"use client";

import { motion } from "framer-motion";
import { ArrowLeftIcon, ShieldCheckIcon, ClockIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { onCreateClick } from "@/actions/dayly-clicks";

export default function PricingSection() {
    const router = useRouter()
  
  const handleOnClick = async () =>{
      router.replace("/checkout/chat-gpt-ai-prompt-book")
      const date = new Date()
      const newClick = await onCreateClick({
        day:date.getDay(),
        month:date.getMonth(),
        year:date.getFullYear(),
        totalClicks:1,
      })
      console.log(newClick)
    }
  return (
    <section className=" flex justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#51e2de40_1px,transparent_1px),linear-gradient(to_bottom,#51e2de40_1px,transparent_1px)] bg-[size:20px_24px] z-10" />
      <div className="container mx-auto px-4 py-16 md:py-24 z-30">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <motion.h1
              initial={{ x: "-100%", opacity: 0.1 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.2,
                ease: "linear",
              }}
              className="text-3xl md:text-4xl lg:text-6xl !leading-tight font-bold tracking-tight  text-heading z-30 text-center md:text-left"
            >
              <span> আজই শুরু করুন</span>
              <br />
              <span>আপনার</span>{" "}
              <span className="text-[#7C3AED]">AI জার্নি!</span>
            </motion.h1>
            <motion.p
              initial={{ x: "-100%", opacity: 0.1 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.2,
                ease: "linear",
                delay: 0.3,
              }}
              className="text-base md:text-lg text-para font-semibold z-30 text-center md:text-left"
            >
              AI টুলসের শক্তি ব্যবহার করে কিভাবে দৈনন্দিন জটিল কাজগুলো সহজে
              সম্পন্ন করবেন এবং নিজের দক্ষতা একধাপ এগিয়ে নিয়ে যাবেন, তা শিখুন
              এই বই থেকে।
            </motion.p>
          </div>

          {/* Right Column - Pricing Card */}
          <motion.div
            initial={{ x: "100%", opacity: 0.1 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.4,
              ease: "linear",
            }}
          >
            <Card className="w-full max-w-md mx-auto rounded-2xl shadow-lg relative overflow-hidden z-30">
              <motion.div
                initial={{ scale: 2, opacity: 0 }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.4,
                  ease: "anticipate",
                  delay: 0.8,
                }}
                className="bg-cta/20 py-2 px-2 absolute top-2 right-2 rounded-xl"
              >
                <p className="text-cta font-semibold italic">save 71%+</p>
              </motion.div>
              <CardHeader className="text-center space-y-2 pb-0 mt-10">
                <CardTitle className="text-4xl  flex justify-center gap-5">
                  <motion.span
                    initial={{
                      scale: 0,
                      x: 10,
                      opacity: 0.2,
                    }}
                    whileInView={{
                      scale: 1,
                      x: 0,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "anticipate",
                      delay: 0.8,
                    }}
                    className="text-highlight font-bold"
                  >
                    ৳.১৬৯{" "}
                  </motion.span>
                  <motion.s
                    initial={{ scale: 0, opacity: 0.2 }}
                    whileInView={{
                      scale: 1,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "anticipate",
                      delay: 0.4,
                    }}
                    className="text-para font-semibold"
                  >
                    ৳.৬০০{" "}
                  </motion.s>
                </CardTitle>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "anticipate",
                    delay: 0.8,
                  }}
                  className="text-gray-600"
                >
                  একবার পেমেন্ট, আজীবন অ্যাক্সেস
                </motion.p>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "anticipate",
                    delay: 0.9,
                  }}
                > 
                    <Button className="w-full py-6 text-lg font-medium bg-[#10B981] hover:bg-[#059669] transition-colors" onClick={handleOnClick} >
                    এখনই কিনুন এবং শেখা শুরু করুন
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "anticipate",
                    delay: 1,
                  }}
                  className=" w-full flex justify-center space-y-4 text-center"
                >
                  <div className="flex items-center gap-3">
                    <ArrowLeftIcon className="w-6 h-6 text-[#7C3AED]" />
                    <span className="text-gray-600">ফ্রি লাইফটাইম এক্সেস </span>
                  </div>
                </motion.div>
              </CardContent>
              <CardFooter className="p-0">
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-r from-green-200 via-purple-200 to-pink-200 opacity-30 blur-3xl -z-10" />
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
