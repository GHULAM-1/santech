import React from "react";
import Hero from "@/components/hero";
import AboutSolutions from "@/components/aboutus/about1";
import TrustedBySection from "@/components/logosSec";
import OverlappingSection from "@/components/aboutus/overLapSec";
import ValuesSection from "@/components/aboutus/ourValue";
import { valuesData } from "@/data/valuCardData";
import LetsTalk from "@/components/letsTalk";
export default function AboutPage() {
  return (
    <>
      <Hero
        backgroundImage="/aboutHero.png"
        heading="About Us"
        description="Got questions, inquiries, or need support? We're here to help, anytime!"
        showButton={false}
        showClients={false}
      />
      <div className="-mt-[25%] p-[60px]">
        <AboutSolutions />
      </div>

      <TrustedBySection
        title="Trusted by Innovative Startups"
        containerClass="bg-gray-100 flex-col px-[80px] py-[48px]"
        logoDiv="flex justify-between gap-[90px]" 
        imageClass="w-[120px] hover:scale-110 transition-transform"
        paraClass="w-full text-[36px] font-[700]"
      />
      <OverlappingSection/>

      <ValuesSection values={valuesData}/>

      <LetsTalk/>
    </>
  );
}
