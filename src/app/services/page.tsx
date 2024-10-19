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

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <div className="self">
      <ServicesCard />
      </div>
      <COOServiceSection/>
      <TrustedBySection
      paraClass="font-[600] text-[36px] self-start "
      imageClass=" hover:scale-110 transition-transform"/>

      <TestimonialsSection/>
      <Services services={servicesData} heading="Related Services" />
      <LetsTalk/>
    </>
  );
}
