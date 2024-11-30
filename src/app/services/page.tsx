"use client";
import TrustedBySection from "@/components/logosSec";
import COOServiceSection from "@/components/services/coo";
import ServicesCard from "@/components/services/servicesCard";
import ServicesHero from "@/components/services/serviceshero";
import TestimonialsSection from "@/components/testimonials";
import React from "react";
import Services from "@/components/servicesCards";
import { servicesData } from "@/data/servicesData";
import LetsTalk from "@/components/letsTalk";
import { ServicesCardsData } from "@/data/servicesCardData";
import SquareCard from "@/components/ui/squareCard";
import { outcomes } from "@/data/cooData";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <div className="self">
      <ServicesCard 
        title="Scale Smartly with Proven COO Leadership"
        description="Scaling a business requires operational excellence and leadership, but not every company needs a full-time COO. Our COO as a Service offers on-demand expertise to streamline operations, tackle challenges, and drive growth."
      />
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
      <COOServiceSection heroTitle=" Key Outcomes with COO as a Service" heroDescription="Our COO as a Service provides hands-on leadership and strategic guidance,
          delivering optimized operations, growth strategies, and measurable outcomes to help your business thrive." outcomes={outcomes}/>
      <TrustedBySection
      paraClass="font-[600] text-[36px] self-start "
      imageClass=" hover:scale-110 transition-transform"/>

      <TestimonialsSection/>
      <Services services={servicesData} heading="Related Services" />
      <LetsTalk/>
    </>
  );
}
