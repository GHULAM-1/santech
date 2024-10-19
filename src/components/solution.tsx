'use client';
import { industries } from "@/data/solutionData";

export default function IndustrySolutions() {
  return (
    <div className="bg-gray-900 text-white p-12 rounded-lg">
      <div className="mb-8">
        <h2 className="text-4xl font-bold">
          Solutions Built for Your Industry,{' '}
          <p className="text-[#37E391]">Expertise You Can Trust</p>
        </h2>
        <p className="mt-4 text-lg text-gray-300 w-[57%]">
          At Santech, we specialize in creating innovative solutions tailored to meet the 
          unique demands of industries we understand inside and out. Whether it’s real 
          estate technology or enterprise-level systems, we offer the tools you need to grow and thrive.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-gray-800 rounded-md shadow-md hover:shadow-lg transition-shadow "
          >
            <div className="mb-4">{industry.icon}</div>
            <h3 className="text-md font-semibold text-center">{industry.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
