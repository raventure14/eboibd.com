import {  BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-thin-yellow pt-16 pb-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className=" grid grid-cols-2 items-start md:grid-cols-1">
            <div className="flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-[#00C49A]" />
              <span className="text-xl font-medium text-heading">E-Boi</span>
            </div>

            <div className="space-y-1">
              <h3 className="font-medium text-lg text-heading">Address:</h3>
              <p className="text-para">123 Main Street, City</p>
              <p className="text-para">State Province, Country</p>
            </div>

            <div className="flex gap-4">
              <Link href="#">
                <Image
                  height={50}
                  width={50}
                  src={"/icons/facebook.svg"}
                  alt="Facebook Icon"
                />
              </Link>
              <a href="#">
                <Image
                  height={50}
                  width={50}
                  src={"/icons/instagram.svg"}
                  alt="Facebook Icon"
                />
              </a>
              <a href="#">
                <Image
                  height={50}
                  width={50}
                  src={"/icons/tiktok.svg"}
                  alt="Facebook Icon"
                />
              </a>
            </div>
          </div>

          {/* Middle Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-medium text-heading">Reach Us</h2>

            <div className="flex items-center gap-2 text-para">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path
                  fill="currentColor"
                  d="M20.56 3.34a1 1 0 0 0-1-.08l-17 8a1 1 0 0 0-.57.92 1 1 0 0 0 .6.9L8 15.45v6.72L13.84 18l4.76 2.08a.93.93 0 0 0 .4.09 1 1 0 0 0 .52-.15 1 1 0 0 0 .48-.86V4a1 1 0 0 0-.44-.66z"
                />
              </svg>
              <span>contact@raventure.com</span>
            </div>

            <form className="space-y-4">
              <Input
                type="email"
                placeholder="example@gmail.com"
                className="bg-[#E5E5E5] border-0"
              />
              <Input
                type="text"
                placeholder="your phone number(optional)"
                className="bg-[#E5E5E5] border-0"
              />
              <Textarea
                placeholder="Write your query"
                className="bg-[#E5E5E5] border-0 min-h-[120px]"
              />
              <Button className="bg-[#00C49A] hover:bg-[#00B389] text-white px-8">
                submit
              </Button>
            </form>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-medium">About Us</h2>
            <p className="text-para leading-relaxed">
              Lorem ipsum dolor sit amet et delectus accommodare his consul
              copiosae legendos at vix ad putent delectus delicata usu. Vidit
              dissentiet eos cu eum an brute copiosae hendrerit. Eos erant
              dolorum an. Per facer affert ut. Mei iisque mentitum moderatius
              cu. Sit munere
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-para hover:text-gray-900">
                Privicy Policy
              </a>
              <a href="#" className="text-para hover:text-gray-900">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 text-center text-para flex flex-col md:flex-row justify-center ">
          <p className="flex items-center  justify-center  gap-1">
            © 2024 RA Venture. All rights reserved.
          </p>
          <p className="text-center">
            {" "}
            <span>Developed With </span>
            💖
            by{" "}
            <Link href="https://abdunnoorfaruki.vercel.app/" target="_blank"  className=" hover:text-gray-900">
              Abdun Noor Faruki Biswas
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
