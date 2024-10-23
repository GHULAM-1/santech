"use client";

import ConatctCards from "@/components/contactus/cards";
import Hero from "@/components/hero";
import CalCom from "@/components/ui/calendar";
import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";// Import the Skeleton component

export default function ContactUs() {
  const [isMapLoaded, setIsMapLoaded] = useState(false); // State to track map loading

  useEffect(() => {
    // Simulate map loading time (you can adjust this delay)
    const timeout = setTimeout(() => setIsMapLoaded(true), 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>

    <div className="overflow-x-hidden">
      <div className="w-full">
      <Hero
        backgroundImage="/contactHero.png"
        description="Got questions, inquiries, or need support? We're here to help, anytime!"
        heading="Contact Us"
      />
      </div>

      <div className="p-[24px] lg:px-0">
      <CalCom />
      </div>
      <ConatctCards />

      <div className="flex justify-center px-[24px] py-[24px] w-full lg:w-screen h-[682px]  lg:px-[80px] lg:py-[40px]">
        <div className="relative w-full lg:w-[98%] lg:mx-6 md:h-96 lg:h-[550px] rounded-xl overflow-hidden">
          {/* Conditional rendering to show Skeleton while map is loading */}
          {!isMapLoaded ? (
            <Skeleton className="absolute inset-0 w-full h-full rounded-3xl" />
          ) : (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.7605317111897!2d74.33999707506752!3d31.475772949345114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919042715f767ad%3A0xb0251034ce47145e!2sARFA%20Tower%2C%20Lahore%20%E2%80%93%20Kasur%20Rd%2C%20Nishtar%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1725144937661!5m2!1sen!2s"
              className="absolute inset-0 w-full h-full"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          )}

          {/* Button placed over the map */}
          <a
            href="https://goo.gl/maps/dLKU1RY6KbvNkZw68"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 lg:left-14 left-5 px-2 lg:px-6 py-2 bg-[#16339C] text-white  hover:bg-blue-500 transition-all text-[14px] font-semibold"
          >
            View in Google Maps
          </a>
        </div>
      </div>
      </div>
    </>
  );
}
