'use client';
import { industries } from "@/data/solutionData";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa"; // Import the hover icon

export default function IndustrySolutions() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-gray-900 text-white p-12 rounded-lg">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          Solutions Built for Your Industry,{' '}
          <span className="text-[#37E391]">Expertise You Can Trust</span>
        </h2>
        <p className="mt-4 text-base text-gray-300 w-full lg:w-[57%]">
          At Santech, we specialize in creating innovative solutions tailored to meet the 
          unique demands of industries we understand inside and out. Whether it’s real 
          estate technology or enterprise-level systems, we offer the tools you need to grow and thrive.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
        {industries.map((industry, index) => (
          <div
            key={index}
            className={`flex flex-row lg:flex-col items-center p-6 rounded-md shadow-md 
            transition-all transform ${
              hoveredIndex === index
                ? 'bg-gray-700 translate-y-[-10px] scale-105 shadow-xl'
                : 'bg-[#292929] scale-100 translate-y-0'
            } ease-in-out duration-300 gap-4 md:gap-9 lg:gap-0`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`mb-4 align-middle transition-transform duration-300 ease-in-out ${
                hoveredIndex === index ? 'scale-110' : 'scale-100'
              }`}
            >
              {hoveredIndex === index ? (
                <FaShoppingCart size={30} /> // Change icon to cart on hover
              ) : (
                industry.icon // Default icon
              )}
            </div>
            <h3 className="text-md font-semibold text-center text-white">
              {industry.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
