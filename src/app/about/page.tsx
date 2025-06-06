import React from "react";
import Hero from "@/components/hero";
import AboutSolutions from "@/components/aboutus/about1";
import TrustedBySection from "@/components/logosSec";
import OverlappingSection from "@/components/aboutus/overLapSec";
import ValuesSection from "@/components/aboutus/ourValue";
import { valuesData } from "@/data/valuCardData";
import LetsTalk from "@/components/letsTalk";
export const metadata = {
  title: "About",
};
export default function AboutPage() {
  return (
    <>
      <div className="w-full ">
      <Hero
        backgroundImage="/aboutHero.png"
        heading="About Us"
        description="Discover Who We Are and How We Drive Innovation in Technology Solutions."
        showButton={false}
        showClients={false}
      />
      </div>
      <div className=" p-[24px] md:p-[32px] lg:p-[80px]">
        <AboutSolutions />
      </div>

      <TrustedBySection
        title="Trusted by Innovative Startups"
        containerClass="bg-gray-100 flex-col  md:px-[80px] md:py-[48px]"
        logoDiv="flex justify-between gap-[20px] md:gap-[90px]" 
        imageClass="w-[90px] md:w-[120px] hover:scale-110 transition-transform"
        paraClass="w-full text-[26px] md:text-[36px] font-[700]"
      />
      <div className="hidden lg:block">
      <OverlappingSection/>
      </div>
      <ValuesSection values={valuesData}/>

      <LetsTalk/>
    </>
  );
}
