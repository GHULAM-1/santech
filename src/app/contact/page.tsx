import ClientService from "@/components/clientService";
import ConatctCards from "@/components/contactus/cards";
import Hero from "@/components/hero";
import React from "react";

export default function ContactUs() {
  return (
    <>
      <Hero
        backgroundImage="/contactHero.png"
        description="Got questions, inquiries, or need support? We're here to help, anytime!"
        heading="Contact Us"
      />
      <ClientService
        containerStyle={{ marginTop: "-200px" }}
        className="flex justify-center border-[1px] ml-60 items-center"
      />
      <ConatctCards />

      <div className="flex justify-center w-screen mt-8 px-[80px] py-[40px]">
        {/* Container for map with button on top */}
        <div className="relative w-[98%] mx-6 md:h-96 lg:h-[550px] rounded-3xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.7605317111897!2d74.33999707506752!3d31.475772949345114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919042715f767ad%3A0xb0251034ce47145e!2sARFA%20Tower%2C%20Lahore%20%E2%80%93%20Kasur%20Rd%2C%20Nishtar%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1725144937661!5m2!1sen!2s"
            className="absolute inset-0 w-full h-full"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Button placed over the map */}
          <a
            href="https://goo.gl/maps/dLKU1RY6KbvNkZw68"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-14 px-6 py-2 bg-[#16339C] text-white font-semibold  hover:bg-blue-500 transition-all"
          >
            View in Google Maps
          </a>
        </div>
      </div>
    </>
  );
}
