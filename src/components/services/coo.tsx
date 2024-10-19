'use client';

import React from 'react';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa'; // Using icons from react-icons
import { outcomes } from '@/data/cooData';
const COOServiceSection = () => {
  return (
    <div className="bg-[#F5F7FA] p-[80px] flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Key Outcomes with COO as a Service
        </h2>
        <p className="text-gray-600 mb-8">
          Our COO as a Service provides hands-on leadership and strategic guidance,
          delivering optimized operations, growth strategies, and measurable outcomes to help your business thrive.
        </p>

        <ul className="space-y-4">
          {outcomes.map((outcome, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700">
              <FaCheck className="text-blue-600 mt-1" />
              <p>{outcome}</p>
            </li>
          ))}
        </ul>

        <button className="mt-8 bg-blue-600 text-white py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-all">
          Book a meet <span>&rarr;</span>
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2">
        <Image
          src="/services/coo.png" // Replace with the actual image path
          alt="COO Service Meeting"
          width={600}
          height={400}
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default COOServiceSection;
