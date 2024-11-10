'use client'
import React, { useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Button } from "./ui/button";
import { ServicesProps } from "@/types/all-types";

const Services: React.FC<ServicesProps> = ({ services, heading = 'Our Services' }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth;
  
      if (direction === "left") {
        current.scrollLeft -= scrollAmount;
      } else {
        current.scrollLeft += scrollAmount;
      }
    }
  };
  

  return (
    <div className="md:py-[80px] lg:px-[80px] md:px-[32px] px-[24px] py-0 bg-white">
      {/* Heading Section */}
      <div className="flex md:flex-row md:justify-between flex-col items-center py-[24px]">
        <h2 className="text-[24px] lg:text-[36px] font-[600] text-center text-gray-800">
          {heading}
        </h2>

        {/* Top Right Buttons */}
        <div className="flex gap-4  items-center">
          <Button className="hidden md:flex items-center gap-2 border-[1px] bg-white border-[#BBBEC3] text-[#16339C]">
            All Services <FaArrowRight className="align-middle" />
          </Button>

          <button
            onClick={() => scroll("left")}
            className="hidden md:block border p-3 rounded-full bg-white shadow-md hover:bg-gray-100"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="hidden md:block border p-3 rounded-full bg-white shadow-md hover:bg-gray-100"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Scrollable Services Container */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex flex-col items-center justify-between md:flex-row gap-6  overflow-x-hidden no-scrollbar scroll-smooth"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="w-[272px] md:w-[305px] md:min-w-[310px] h-[400px] p-6 border-[2px] border-[#BBBEC3] shadow-sm hover:shadow-lg transition-shadow hover:border-[#05DC75] group"
            >
              <div className="text-6xl w-[80px] h-[80px] text-[#16339C] pb-[32px]">{service.icon}</div>
              <h3 className="text-[24px] font-semibold text-[#16339C] leading-[32px]">
                {service.title}
              </h3>
              <p className="text-[16px] text-black leading-[24px] font-[400]">{service.description}</p>
              <div className="flex justify-end items-end mt-28">
                <button className="bg-accent w-[48px] h-[48px] self-end rounded-full flex items-center justify-center hover:bg-accent ">
                  <FaArrowRight className="text-[#040817] ease-in-out duration-500 group-hover:-rotate-45" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button className="md:hidden flex items-center gap-2 border-[1px] bg-white border-[#BBBEC3] text-[#16339C] my-5">
        All Services <FaArrowRight className="align-middle" />
      </Button>
    </div>
  );
};

export default Services;
