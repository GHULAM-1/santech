"use client";

import React from "react";

// Define prop types for the TextCard
interface TextCardProps {
  title: string;
  description: string|undefined;
  bgColor?: string;
  socialIcons?: React.ReactNode[]; // Optional prop for social icons
}

const TextCard: React.FC<TextCardProps> = ({
  title,
  description,
 
  socialIcons,
}) => {
  return (
    
    <div
      className={`px-[32px] rounded-[8px] py-[48px] bg-[#F8F9F9] gap-[20px] flex flex-col xl:w-[305px] xl:h-[176px] lg:w-[234px] lg:h-[160px] border border-[#BBBEC3] `}
    >
      <div className='w-[200px]'>
        <h3 className="text-xl font-semibold text-gray-800 mb-[8px]">{title}</h3>
        <div className="text-[#040817] text-[16px] font-normal leading-[24px]">
          {description?.split('\n').map((line, index) => (
            <p className="text-[#040817] text-[14px] font-normal leading-[24px]" key={index}>{line}</p>
          ))}
        </div>
      {socialIcons && (
        <div className="flex  gap-3">
          {socialIcons.map((icon, index) => (
            <span key={index}>{icon}</span>
          ))}
        </div>
      )}
      </div>
    </div>
   
  );
};

export default TextCard;
