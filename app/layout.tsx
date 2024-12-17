import Providers from "@/providers";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "react-hot-toast"


export const metadata: Metadata = {
  title: "EboiBD | Bangladesi best e-book selling website",
  description:
    "এই বইটি আপনাকে শূন্য থেকে ChatGPT সম্পর্কে ধারণা দেবে। এটি ব্যবহার করে কিভাবে নিজের দক্ষতা বৃদ্ধি করা যায় এবং ব্যক্তিগত ও পেশাগত জীবনে কিভাবে নিজেকে আরও productive করে তোলা যায় তা শেখাবে। বাস্তব উদাহরণ ও সহজ নির্দেশিকার মাধ্যমে আপনি শিখবেন prompt কী, কীভাবে prompt লিখে কাঙ্ক্ষিত ফলাফল/উত্তর পাওয়া যায় এবং কীভাবে prompt mastery দক্ষতা অর্জন করা যায়। এছাড়াও, এই সম্পর্কিত bonus knowledge resources তো থাকছেই।",
  icons: {
    icon: "favicon.ico",
  },
  keywords: [
    "Best ai book",
    "Artificial intelligence e-book",
    "Learn machine learning online",
    "Best AI books for beginners",
    "Life-changing books to read",
    "Buy AI e-book online",
    "Buy AI e-book online",
    "Buy prompt engineering e-book online",
    "Best prompt engineering e-book for beginners",
    "Best prompt engineering e-book for beginners"
  ],
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-center" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
