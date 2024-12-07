"use client";
import CallToAction from "@/components/call-to-action";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="w-full min-h-[calc(100vh-2rem)] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#51e2de40_1px,transparent_1px),linear-gradient(to_bottom,#51e2de40_1px,transparent_1px)] bg-[size:20px_24px] z-10" />
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between  px-4 py-32 sm:px-6 lg:px-8  sm:py-12 lg:py-16 gap-8  ">

        <motion.div
          initial={{
            x: -30,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
          }}
          className="flex-1 px-10 md:px-0 space-y-6 text-center lg:text-left leading-normal z-20"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-heading text-balance md:text-nowrap !leading-tight ">
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
                duration: 0.25,
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
                duration: 0.25,
                ease: "easeInOut",
              }}
              className="text-purple-600"
            >
              গোপন রহস্য
            </motion.span>{" "}
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
                duration: 0.25,
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
              duration: 0.25,
              ease: "easeInOut",
              delay: 0.2,
            }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 text-balance"
          >
            বইটি পড়ে সহজে AI সম্পর্কে জেনে সফলতার পথে নিজেকে 10X এগিয়ে রাখুন
          </motion.p>
          <CallToAction initial={{x:-50, opacity:0}} whileInview={{
            x:0,opacity:1
          }} transition={{
            duration:0.2,
            ease:"easeInOut",

          }} />
        </motion.div>

        <motion.div initial={{
            x: 50,
            opacity: 0,
          }}
          whileInView={{
            x:0,
            opacity:1
          }}
          transition={{
            duration:0.25, 
            ease:"easeInOut",
           
          }} className="flex-1 relative w-full max-w-[500px] lg:max-w-none z-20">
          <div className="bg-[#B4EFE7] rounded-full absolute -z-10 h-full w-full left-0" />
          <Image
            src="/laptop-with-shapes.png"
            alt="Laptop with 3D shapes"
            width={600}
            height={800}
            className="relative z-10 w-full h-auto"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}
