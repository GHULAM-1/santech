'use client'
import React from "react";
import HomeHero from "./homeHero";
import TrustedBySection from "./logosSec";
import AboutUs from "./ui/aboutUsSec";
import HomeAbout from "./homeAbout";
import Services from "./servicesCards";
import { servicesData } from "@/data/servicesData";
import FeaturedSection from "./expertiesSec";
import WhyChooseUs from "./whyChoose";
import IndustrySolutions from "./solution";
import TestimonialsSection from "./testimonials";
import BookMeeting from "./bookMeeting";
import LetsTalk from "./letsTalk";

export default function Home() {
  return (
    <>
    
      {/* <HomeHero /> */}
      <TrustedBySection 
      paraClass="font-[600] text-[36px] self-start "
      imageClass=" hover:scale-110 transition-transform"
      />
      <HomeAbout />
      <Services services={servicesData} heading="Our Services" />
      <FeaturedSection
        title="Leading the Future of Real Estate with PropTech Expertise"
        subtitle="Expertise"
        description="Harness cutting-edge technology to transform the way you buy, sell, manage, and invest in real estate. Our deep expertise in PropTech ensures innovative, scalable, and impactful solutions tailored to your needs."
        buttonText="Book a call"
        image="/house1.png"
      />
      <WhyChooseUs />

      <div className="p-8">
        <IndustrySolutions />
      </div>
      <TestimonialsSection/>

      <BookMeeting/>
      
      <LetsTalk/>
     
    </>
  );
}
