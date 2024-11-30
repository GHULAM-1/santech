" use client";
import React from "react";
import { aserviceType } from "@/types/all-types";
import Hero from "./hero";
import ServicesCard from "./services/servicesCard";
import { aserviceData } from "@/data/aserviceData";
import TrustedBySection from "@/components/logosSec";
import TestimonialsSection from "@/components/testimonials";
import COOServiceSection from "@/components/services/coo";
import SquareCard from "./ui/squareCard";
import LetsTalk from "@/components/letsTalk";

type aserviceTypes = {
  data: aserviceType;
};
export default function AService({ data }: aserviceTypes) {
  return (
    <>
      <div className="w-full ">
        <Hero
          backgroundImage="/aboutHero.png"
          heading={data.heroTitle}
          description={data.heroDescription}
          showButton={false}
          showClients={false}
        />
        <ServicesCard title={data.featureHeading} />
        <div className="flex flex-wrap gap-8 mb-[80px] justify-center">
        {data.cards.map((card, index) => (
          <SquareCard
            key={index}
            newicon={card.icon} // Passing the icon for each card
            title={card.heading} // Passing the heading for each card
            description={card.description} // Passing the description for each card
            flexprop="flex-col items-start"
            container="p-[24px]"
          />
        ))}
      </div>
      <COOServiceSection heroTitle={data.outcomeheading} outcomes={data.outcomes||[]}/>
      <TrustedBySection
      paraClass="font-[600] text-[36px] self-start "
      imageClass=" hover:scale-110 transition-transform"/>

      <TestimonialsSection/>
      <LetsTalk/>
      </div>
    </>
  );
}
