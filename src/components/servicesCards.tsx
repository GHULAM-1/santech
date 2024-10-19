'use client'
import React, { useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Button } from "./ui/button";

const Services: React.FC<ServicesProps> = ({ services }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth; // Scroll by the width of the container

      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="py-12 px-6 md:px-20 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>

        {/* Top Right Buttons */}
        <div className="flex gap-4 items-center">
          <Button className="flex items-center gap-2 border-[1px] border-[#BBBEC3] text-[#16339C]">
            All Services <FaArrowRight className="align-middle" />
          </Button>

          <button
            onClick={() => scroll("left")}
            className="border p-3 rounded-full bg-white shadow-md hover:bg-gray-100"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="border p-3 rounded-full bg-white shadow-md hover:bg-gray-100"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Scrollable Services Container */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-hidden no-scrollbar scroll-smooth"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className=" w-[305px] h-[300px] p-6 border-[2px] border-[#BBBEC3]  shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl text-[#16339C] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#16339C] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="flex mt-20 justify-end">
                <button className="bg-[#05DC75] w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-600">
                  <FaArrowRight className="text-black" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
