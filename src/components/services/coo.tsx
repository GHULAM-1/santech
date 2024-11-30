// COOServiceSection.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import OutcomeList from '../outcomelist'; // Import the OutcomeList component

interface COOServiceSectionProps {
  heroTitle: string;
  heroDescription?: string;
  outcomes: string[]; 
 

}

const COOServiceSection = ({ heroTitle, heroDescription, outcomes }: COOServiceSectionProps) => {
  return (
    <div className="bg-[#F5F7FA] p-[30px] lg:p-[80px] flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
      {/* Left Side - Text Content */}
      <div className=" ">
        <h2 className="text-[36px] leading-[40px] font-semibold text-gray-900 mb-4">
          {heroTitle} {/* Dynamic Heading */}
        </h2>
        <p className="text-[#4F5052] text-[20px] font-[400] leading-[28px] mb-8">
          {heroDescription} {/* Dynamic Description */}
        </p>

        {/* Outcome List Component */}
        <OutcomeList outcomes={outcomes} />

        <button className="mt-8 bg-primary text-white py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-all">
          Book a meet <span className="font-[400]"><ArrowRight /></span>
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="w-full ">
        <Image
          src="/services/coo.png" // Replace with the actual image path
          alt="COO Service Meeting"
          width={630}
          height={552}
          className="rounded-xl shadow-lg w-full object-cover lg:h-full h-[300px] lg:w-[630px]"
        />
      </div>
    </div>
  );
};

export default COOServiceSection;
