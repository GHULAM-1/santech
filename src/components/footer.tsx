'use client';
import React from 'react';
import { 
  FiFacebook, 
  FiInstagram, 
  FiLinkedin, 
  FiMail, 
  FiTwitter, 
  FiPhone 
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#16339C] text-white py-10 px-12">
      <div className="flex flex-col lg:flex-row items-start lg:items-center  gap-4">
        {/* Left Section */}
        <div className="space-y-4 w-full md:w-[50%]">
          <img src="/logo2.png" alt="Santech Logo" className="w-32 mb-16" />
          <p>© 2024 | All rights reserved.</p>
          <p className="text-sm ">
            Santech Solutions Ltd (Company Number XYZ12345) is registered in [Country] with its
            registered office at [Office Address], [City, Postal Code]. Santech Solutions Ltd is
            Authorized and Regulated by the [Regulatory Body] (License Number ABC987654).
          </p>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 mt-4">
            <button className="bg-[#05DC75] text-black px-4 py-2 font-bold flex items-center gap-2">
              Contact us <span className="text-xl">→</span>
            </button>
            <div className='flex items-center gap-4'>
            <FiMail className="w-8 h-8 cursor-pointer bg-[#05DC75]  text-black hover:bg-white rounded-sm p-1  ease-in-out duration-700 delay-200" />
            <FiTwitter className="w-8 h-8 cursor-pointer bg-[#05DC75]  text-black hover:bg-white rounded-sm p-1 ease-in-out duration-700 delay-200" />
            <FiFacebook className="w-8 h-8 cursor-pointer bg-[#05DC75]  text-black hover:bg-white rounded-sm p-1 ease-in-out duration-700 delay-200" />
            <FiInstagram className="w-8 h-8 cursor-pointer bg-[#05DC75]  text-black hover:bg-white rounded-sm p-1 ease-in-out duration-700 delay-200" />
            <FiLinkedin className="w-8 h-8 cursor-pointer bg-[#05DC75]  text-black hover:bg-white rounded-sm p-1 ease-in-out duration-700 delay-200" />
            <FaWhatsapp className="w-8 h-8 cursor-pointer bg-[#05DC75]  text-black hover:bg-white rounded-sm p-1 ease-in-out duration-700 delay-200" />
            </div>
          </div>
        </div>

        {/* Sitemap */}
        <div className='flex flex-col lg:flex-row items-start text-[#D1D3D7]  gap-10 lg:gap-28'>
          <div className='lg:mt-0 mt-6'>
          <h4 className="font-bold">Sitemap</h4>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Services</li>
            <li>About us</li>
            <li>Resources</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h4 className="font-bold">Services</h4>
          <ul className="space-y-2">
            <li>Marketing</li>
            <li>Technical</li>
            <li>Proptech</li>
            <li>Additional</li>
          </ul>
        </div>

        {/* Legal */}
        <div className="space-y-4">
          <h4 className="font-bold">Legal</h4>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>
      </div>
      </div>
    </footer>
  );
}
