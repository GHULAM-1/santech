'use client'
import React from "react";


// Define props types for dynamic title and description
interface ServicesCardProps {
  title: string;
  description?: string;
}

export default function ServicesCard({ title, description }: ServicesCardProps) {
  return (
    <>
      <div className=" ">
        <div className="text-black p-[40px] lg:p-[80px]">
          <h1 className="text-[24px] lg:text-[36px] font-semibold leading-[40px] w-full mb-[16px] lg:mb-0">
            {title}
          </h1>
          <p className="text-[18px] lg:text-[20px] leading-[28px] font-normal w-full lg:w-[69%] text-[#4F5052] ">
            {description}
          </p>
        </div>

        
      </div>
    </>
  );
}
