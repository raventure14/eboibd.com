"use client";
import CallToAction from "@/components/call-to-action";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="w-full min-h-[calc(100vh-2rem)] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#51e2de40_1px,transparent_1px),linear-gradient(to_bottom,#51e2de40_1px,transparent_1px)] bg-[size:20px_24px] z-10" />
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between  px-4 py-32 sm:px-6 lg:px-8  sm:py-12 md:pt-40 lg:py-16 gap-8  ">
        <motion.article
          initial={{
            x: -30,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.1,
            ease: "easeInOut",
          }}
          className="flex-1 px-10 md:px-0 space-y-6 text-center lg:text-left leading-normal z-20"
        >
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl font-bold text-heading text-balance md:text-nowrap !leading-tight px-2 sm:px-0 ">
            <motion.span
              initial={{
                x: -50,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.1,
                ease: "easeInOut",
              }}
            >
              কেবলে কয়েকটি ক্লিকে সফলতার{" "}
            </motion.span>
            <motion.span
              initial={{
                x: 50,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.1,
                ease: "easeInOut",
              }}
              className="text-purple-600"
            >
              গোপন রহস্য
            </motion.span> <br />
            <motion.span
              initial={{
                x: -50,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.1,
                ease: "easeInOut",
              }}
            >
              {" "}
              উন্মোচন করুন!
            </motion.span>
          </h1>
          <motion.p
            initial={{
              x: -50,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.1,
              ease: "easeInOut",
              delay: 0.1,
            }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 text-balance"
          >
            বইটি পড়ে সহজে AI সম্পর্কে জেনে সফলতার পথে নিজেকে 10X এগিয়ে রাখুন
          </motion.p>
          <CallToAction
            initial={{ x: -50, opacity: 0 }}
            whileInview={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.1,
              ease: "easeInOut",
            }}
          />
        </motion.article>

        <motion.div
          initial={{
            x: 50,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.1,
            ease: "easeInOut",
          }}
          className="flex-1 relative w-full max-w-[400px] lg:max-w-none z-20"
        >
          <div className="bg-[#B4EFE7] rounded-[70%] absolute bottom-0 -z-10 h-[50%] w-full left-0 backdrop-blur-2xl " />
          <Image
            src="/hero-img.webp"
            alt="Artificial intelligance, chagGPT, and prompt engineering"
            width={400}
            height={400}
            className="relative z-10 w-full object-cover "
            priority
          />
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity:1
            }}
            transition={{
              duration:0.2,
              ease:"anticipate",
              delay:0.3
            }}
          
            className="absolute top-10 left-5 rotate-12 z-50 bg-yellow-400   rounded-full hidden md:flex flex-col items-center 
          justify-center  w-16 h-16 md:h-20 md:w-20 lg:h-32 lg:w-32 text-[12px] shadow-card2"
          >
            <Image
              src={"/discount.webp"}
              alt="Discount upto 71%+"
              height={50}
              width={50}
              className="w-full object-cover rounded-full
          "
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
