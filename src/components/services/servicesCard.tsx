import React from "react";
import { ServicesCardsData } from "@/data/servicesCardData";
import SquareCard from "@/components/ui/squareCard";
export default function ServicesCard() {
  return (
    <>
      <div className=" ">
        <div className="text-black p-[80px]">
            <h1 className="text-[36px] font-semibold w-[40%]">Scale Smartly with Proven COO Leadership</h1>
            <p className="text-[20px] font-normal w-[59%] text-[#4F5052]">Scaling a business requires operational excellence and leadership, but not every company needs a full-time COO. Our COO as a Service offers on-demand expertise to streamline operations, tackle challenges, and drive growth.</p>
        </div>

        <div className="flex flex-wrap gap-8 p-[24px] justify-center">
          {ServicesCardsData.map((card, index) => (
            <SquareCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}
