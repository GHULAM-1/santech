import React from "react";

export default function OverlappingSection() {
  return (
    <div className="relative w-full h-[600px] px-[80px] py-[40px]">
      {/* Background Image */}

      <div className="flex justify-end items-baseline">
        <img
          src="/about/overlap.png" // Replace with your image path
          alt="Overlapping Section"
          className="w-[60%] object-cover"
        />
      </div>

      {/* Overlay Text Section */}
      <div className="absolute top-[46%] left-[10%] -translate-y-1/2 bg-white  rounded-lg shadow-lg w-[44%] h-[400px] p-8">
        <h2 className="text-3xl font-semibold text-black mb-4">
          Empowering Businesses with Tailored Tech Solutions That Drive Growth
        </h2>
        <p className="text-[16px] text-gray-600 mb-6">
          At Santech, we don’t just provide tech services; we partner with
          businesses to deliver customized solutions that help you stay ahead in
          an ever-evolving digital landscape. Our team of experts is dedicated
          to understanding your unique needs, streamlining your operations, and
          scaling your business with cutting-edge technology.
        </p>
        <button className="bg-green-500 text-black py-2 px-4  hover:bg-green-600 transition">
          Get Started →
        </button>
      </div>
    </div>
  );
}
