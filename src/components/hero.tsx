'use client'
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { people } from "@/data/clientsData";
import { Button } from "./ui/button";

export default function Hero({
  heading,
  description,
  backgroundImage,
  showButton = false,
  showClients = false,
}: PageHeadingProps) {
  return (
    
    <div
      className="hero-section flex flex-col items-start md:px-[32px] px-[24px] lg:px-[80px]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        
        backgroundRepeat: "no-repeat",
      }}
    >
      {heading && (
        <h1 className="text-white text-[30px] lg:leading-[48px] leading-[36px] md:text-[30px] lg:text-[48px] font-semibold  mb-4  mt-24 ">
          {heading}
        </h1>
      )}
      {description && (
        <p className="text-neutral-300 text-[20px] leadin-[28px] font-[400 ] max-w-[600px] mb-2">
          {description}
        </p>
      )}

      {showButton && (
        <Button className=" bg-[#05DC75] text-black mt-6">Get Started</Button>
      )}

      {showClients && (
        <div className="mt-3 md:mt-24 flex flex-col md:flex-row md:items-center w-full gap-2 md:gap-8">
         <div className="flex flex-row items-center justify-start mb-0 md:mb-10 ">
             <AnimatedTooltip items={people} />
        </div>
          <p className="text-white text-[12px] w-[70%] md:w-full mb-8">
            Trusted by Over 10,000+ Active Clients Worldwide
          </p>
        </div>
      )}
    </div>
  );
}
