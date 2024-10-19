'use client';
import React from 'react';
import { glossaryData } from '@/data/glossaryData';

const Glossary: React.FC = () => {
  return (
    <div className="px-[80px] py-[48px]">
      {glossaryData.map((group, index) => (
        <div key={index} className="flex items-start  gap-[90px] mb-16">
          {/* Letter Styling */}
          <h2 className="text-[48px] font-normal text-black min-w-[50px]">
            {group.letter}
          </h2>

          {/* Items under the Letter */}
          <div className="space-y-6">
            {group.items.map((item, idx) => (
              <div key={idx} className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Glossary;
