import React from "react";
import Link from "next/link";

export default function OverlappingSection() {
  return (
    <div className="  flex">    
      <div className="relative w-full  px-[80px] py-[40px]">
      {/* Background Image */}

      <div className="  justify-end flex ">
        <img
          src="/about/overlap.png" // Replace with your image path
          alt="Overlapping Section"
          className=" object-cover w-[847px] h-[600px]"
        />
      </div>

      {/* Overlay Text Section */}
      <div className="absolute top-[47%] right-[45%] -translate-y-[45%] bg-white  rounded-lg shadow-lg w-[630px] h-[490px] p-8">
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
        <Link href="/contact">
        <button className="bg-green-500 text-black py-2 px-4  hover:bg-green-600 transition">
          Get Started →
        </button>
        </Link>
      </div>
    </div>
    </div>

  );
}
