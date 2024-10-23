'use client';
import React from 'react';
import { glossaryData } from '@/data/glossaryData';

const Glossary: React.FC = () => {
  return (
    <div className=" flex flex-col gap-y-[48px] p-[24px] md:p-[32px] lg:p-[80px]">
      {glossaryData.map((group, index) => (
        <div key={index} className="flex items-start justify-start gap-[50px] md:gap-[90px]  ">
          {/* Letter Styling */}
          <h2 className="md:text-[48px] text-[30px] leading-[36px] font-normal text-black min-w-[50px]">
            {group.letter}
          </h2>

          {/* Items under the Letter */}
          <div className="space-y-6">
            {group.items.map((item, idx) => (
              <div key={idx} className="mb-6">
                <h3 className="md:text-xl text-[18px] font-[400] text-gray-800">
                  {item.title}
                </h3>
                <p className="text-black text-[16px] font-[400] leading-[24px]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Glossary;
