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
      className={`lg:px-[32px] lg:py-[48px] bg-[#F8F9F9] gap-[20px] flex flex-col lg:w-[305px] lg:h-[176px] border border-[#BBBEC3]`}
    >
      <div className=''>
        <h3 className="text-xl font-semibold text-gray-800 mb-[8px]">{title}</h3>
        <div className="text-gray-600 text-md">
          {description?.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
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
