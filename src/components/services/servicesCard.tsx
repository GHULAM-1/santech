import React from "react";
import { ServicesCardsData } from "@/data/servicesCardData";
import SquareCard from "@/components/ui/squareCard";
export default function ServicesCard() {
  return (
    <>
      <div className=" ">
        <div className="text-black p-[40px] lg:p-[80px]">
            <h1 className="text-[24px] lg:text-[36px] font-semibold leading-[40px] w-full  mb-[16px] lg:mb-0">Scale Smartly with Proven <br /> COO Leadership</h1>
            <p className="text-[18px] lg:text-[20px] leading-[28px] font-normal w-full lg:w-[69%] text-[#4F5052] ">Scaling a business requires operational excellence and leadership, but not every company needs a full-time COO. Our COO as a Service offers on-demand expertise to streamline operations, tackle challenges, and drive growth.</p>
        </div>

        <div className="flex flex-wrap gap-8 mb-[80px] justify-center">
          {ServicesCardsData.map((card, index) => (
            <SquareCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              flexprop="flex-col items-start"
              container="p-[24px]"
            />
          ))}
        </div>
      </div>
    </>
  );
}
