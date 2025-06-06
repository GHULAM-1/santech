"use client";
import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiTwitter,
  FiPhone,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import FooterNewsletterForm from "./footerNewsLetter";

export default function Footer() {
  return (
    <footer className="bg-[#16339C] text-white p-[24px] lg:p-[80px]">
      <div className="flex flex-col lg:flex-row items-start lg:items-center  gap-[32px]">
        {/* Left Section */}
        <div className="space-y-4 w-full md:w-[50%]">
          <img
            src="/logo2.png"
            alt="Santech Logo"
            className="w-[154px] h-[31px] lg:mb-16 mb-[32px] "
          />
          <p className="text-[#FDFCFB] text-[18px] font-[600] leading-[28px]">
            © 2024 | All rights reserved.
          </p>
          <p className="text-[#FDFCFB] text-[14px] font-[400] leading-[20px]">
            Santech Solutions Ltd (Company Number XYZ12345) is registered in
            [Country] with its registered office at [Office Address], [City,
            Postal Code]. Santech Solutions Ltd is Authorized and Regulated by
            the [Regulatory Body] (License Number ABC987654).
          </p>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 mt-[32px]">
            <Link href="/contact">
              {" "}
              <button className="bg-[#05DC75] text-black text-[14px] px-4 py-2 font-[600] flex items-center rounded-[4px] gap-1">
                Contact us{" "}
                <span className="font-[400]">
                  <ArrowRight className="font-[600]" />
                </span>
              </button>
            </Link>

            <div className="flex  items-center gap-4">
              <FiMail className="w-[40px] h-[40px] cursor-pointer bg-[#05DC75]  text-black hover:bg-white rounded-sm p-1  ease-in-out duration-700 delay-200" />
              <FiTwitter className="w-[40px] h-[40px] cursor-pointer bg-[#05DC75]  text-black hover:bg-white rounded-sm p-1 ease-in-out duration-700 delay-200" />

              <FiInstagram className="w-[40px] h-[40px] cursor-pointer bg-[#05DC75]  text-black hover:bg-white rounded-sm p-1 ease-in-out duration-700 delay-200" />
              <FiLinkedin className="w-[40px] h-[40px] cursor-pointer bg-[#05DC75]  text-black hover:bg-white rounded-sm p-1 ease-in-out duration-700 delay-200" />
              <FaWhatsapp className="w-[40px] h-[40px] cursor-pointer bg-[#05DC75]  text-black hover:bg-white rounded-sm p-1 ease-in-out duration-700 delay-200" />
            </div>
          </div>
            <FooterNewsletterForm/>
        </div>

        {/* Sitemap */}
        <div className="flex flex-col lg:flex-row items-start text-[#D1D3D7]  gap-[32px] lg:gap-28">
          <div className="space-y-4">
            <h4 className=" text-[#FDFCFB] text-[18px] font-[600]">Sitemap</h4>
            <ul className="flex flex-col gap-[8px] text-[#D1D3D7] text-[16px] font-[600]">
              <Link href="/">
                <li className="hover:transform hover:translate-x-2 transition-transform duration-300">
                  Home
                </li>
              </Link>
              <Link href="/">
                <li className="hover:transform hover:translate-x-2 transition-transform duration-300">
                  Services
                </li>
              </Link>
              <Link href="/about">
                <li className="hover:transform hover:translate-x-2 transition-transform duration-300">
                  About us
                </li>
              </Link>
              <Link href="/contact">
                <li className="hover:transform hover:translate-x-2 transition-transform duration-300">
                  Contact us
                </li>
              </Link>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className=" text-[#FDFCFB] text-[18px] font-[600]">Services</h4>
            <ul className="flex flex-col gap-[8px] text-[#D1D3D7] text-[16px] font-[600]">
              <li className="hover:transform hover:translate-x-2 transition-transform duration-300">Marketing</li>
              <li className="hover:transform hover:translate-x-2 transition-transform duration-300">Technical</li>
              <li className="hover:transform hover:translate-x-2 transition-transform duration-300">Proptech</li>
              <li className="hover:transform hover:translate-x-2 transition-transform duration-300">Additional</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className=" text-[#FDFCFB] text-[18px] font-[600]">Legal</h4>
            <ul className="flex flex-col gap-[8px] text-[#D1D3D7] text-[16px] font-[600]">
              <li className="hover:transform hover:translate-x-2 transition-transform duration-300">Privacy Policy</li>
              <li className="hover:transform hover:translate-x-2 transition-transform duration-300">Cookies Policy</li>
              <li className="hover:transform hover:translate-x-2 transition-transform duration-300">Terms of Use</li>
            </ul>
          </div>
        </div>
      </div>
        
    </footer>
  );
}
