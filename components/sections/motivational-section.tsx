"use client";

import { Button } from "@/components/ui/button";
import { GlassContainer } from "@/components/ui/glass-container";
import { BookOpen } from "lucide-react";

export function MotivationalSection() {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/80 via-pink-50/80 to-white/80" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-white/30 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:20px_24px]" 
      />

      <div className="container relative mx-auto px-4">
        <GlassContainer className="p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900/90 mb-8 text-center">
              আপনি কি জানেন ?
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-800/90 space-y-6 mb-10">
              <p className="leading-relaxed">
                কৃত্রিম বুদ্ধিমত্তা (AI) প্রযুক্তির দ্রুত উন্নতি এবং এর ব্যাপক বাস্তবায়ন সাম্প্রতিক বছরগুলোতে চাকরি বাজারে বিপুল পরিবর্তন নিয়ে এসেছে। AI শুধু নতুন কর্মসংস্থান সৃষ্টি করেছে, পাশাপাশি অনেক পুরানো চাকরির চাহিদা কমিয়ে দিয়েছে। McKinsey Global Institute এর একটি রিপোর্ট অনুযায়ী, আগামী দুই দশকে AI প্রযুক্তির কারণে প্রায় ৪০% চাকরি অটোমেটেড হয়ে যেতে পারে, যা লাখ লাখ মানুষের জন্য কর্মসংস্থান সংকট সৃষ্টি করবে।
              </p>
              
              <p className="leading-relaxed">
                তবে, AI কখনোই পুরোপুরি মানুষের স্থান নেবে না; বরং এটি মানুষের কাজকে সহজ করবে, যদি তারা AI এর সঠিক ব্যবহার শিখতে পারে। এ কারণে, ডিজিটাল সাক্ষরতা (digital literacy) এখন একটি অপরিহার্য দক্ষতা হয়ে উঠেছে। যারা AI এর কার্যকারিতা জানে না, তারা ভবিষ্যতে কর্মসংস্থানে টিকে থাকতে পারবে না। AI-কে দক্ষভাবে ব্যবহারের মাধ্যমে একজন ব্যক্তি তার পেশাগত জীবনে অনেক বড় সাফল্য অর্জন করতে পারে।
              </p>
              
              <p className="leading-relaxed">
                এছাড়া, ডিজিটাল বই বা ই-বুকের গুরুত্বও এখন আগের চেয়ে অনেক বেড়েছে। ডিজিটাল বই এখন বিশ্বের এক একটি অংশে তথ্য প্রাপ্তি এবং শিক্ষা অর্জনের সবচেয়ে সহজ ও সাশ্রয়ী মাধ্যম হিসেবে পরিচিত। Pew Research Center এর একটি সমীক্ষায় বলা হয়েছে, ২০১৯ সালে আমেরিকায় ৩০% মানুষ নিয়মিত ই-বুক পড়েন, যা পূর্ববর্তী বছরের তুলনায় উল্লেখযোগ্য বৃদ্ধি।
              </p>
              
              <p className="leading-relaxed">
                ই-বুকের মাধ্যমে পাঠকরা যে কোন সময়, যে কোন স্থানে তাদের প্রয়োজনীয় তথ্য এবং জ্ঞান সংগ্রহ করতে পারেন, যা শুধু শিক্ষার্থীদের জন্য নয়, সাধারণ পাঠকদের জন্যও সুবিধাজনক। ডিজিটাল বইয়ের সুবিধা হলো এটি শুধু স্থান ও সময়ের সীমাবদ্ধতা দূর করে না, বরং পাঠকদের জন্য জ্ঞানের ব্যাপকতা ও সাশ্রয়িতা নিশ্চিত করে। AI এবং ডিজিটাল বই একসাথে কাজ করে, জ্ঞান অর্জনের এবং শেখার পদ্ধতিকে আরো দ্রুত, সহজ এবং উন্নত করে তুলছে।
              </p>
            </div>

            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-purple-600/90 hover:bg-purple-700 text-white font-semibold px-8 py-6 rounded-xl transform transition-all hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                <span>ই-বুক কিনুন</span>
              </Button>
            </div>
          </div>
        </GlassContainer>
      </div>
    </section>
  );
}