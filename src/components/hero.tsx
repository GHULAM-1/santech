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
      className="hero-section flex flex-col justify-start items-start h-screen w-full px-[80px] md:px-12"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: "end",
        backgroundRepeat: "no-repeat",
      }}
    >
      {heading && (
        <h1 className="text-white text-4xl md:text-[48px] font-semibold leading-snug mb-4 md:w-[740px] mt-24 ">
          {heading}
        </h1>
      )}
      {description && (
        <p className="text-neutral-300 text-lg md:text-xl max-w-[600px]">
          {description}
        </p>
      )}

      {showButton && (
        <Button className=" bg-[#05DC75] text-black mt-6">Get Started</Button>
      )}

      {showClients && (
        <div className="mt-24 flex items-center gap-4 w-[329px]">
         <div className="flex flex-row items-center justify-start mb-10 w-full">
             <AnimatedTooltip items={people} />
        </div>
          <p className="text-white text-sm w-full mb-8">
            Trusted by Over 10,000+ Active Clients Worldwide
          </p>
        </div>
      )}
    </div>
  );
}
