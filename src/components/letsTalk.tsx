import React from 'react';
import { ArrowRight } from 'lucide-react'
import Link from 'next/link';

export default function LetsTalk() {
  return (
    <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between px-[30px] py-[40px] md:px-[80px] md:py-[60px] bg-white">
      {/* Left Text Section */}
      <div className="space-y-4 z-10">
        <h2 className="text-2xl md:text-[36px] font-semibold text-[#16339C] leading-[32px]">
          Ready to Transform Your Business?
        </h2>
        <Link href="/contact">
        <button className="flex items-center text-2xl md:text-[36px] font-[400] text-black hover:underline">
          Let’s Talk <span className="ml-2 font-[400]"><ArrowRight/></span>
        </button>
        </Link>
      </div>
      <img
        src="/CTA.png"
        alt="CTA Background"
        className="absolute inset-0 w-full h-full  bg-no-repeat object-cover -z-1"
      />
    </div>
  );
}
