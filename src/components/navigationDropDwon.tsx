"use client";

import { useState, Dispatch, SetStateAction, useRef } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

// Type alias for the setState function
type SetStateBoolean = Dispatch<SetStateAction<boolean>>;

export default function Navbar() {
  const [showServices, setShowServices] = useState<boolean>(false);
  const [showResources, setShowResources] = useState<boolean>(false);

  // Refs to store timeout IDs
  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resourcesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Functions to handle mouse enter with clearing timeout
  const handleMouseEnter = (
    setState: SetStateBoolean,
    timeoutRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>
  ) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current); // Clear any existing timeout
    setState(true); // Show the dropdown
  };

  // Functions to handle mouse leave with delay before hiding the dropdown
  const handleMouseLeave = (
    setState: SetStateBoolean,
    timeoutRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>
  ) => {
    timeoutRef.current = setTimeout(() => {
      setState(false); // Hide the dropdown after 300ms
    }, 300);
  };

  return (
    <nav className="relative">
      <div className="flex justify-between items-center">
        <ul className="flex space-x-6 items-center text-[16px] font-[400]">
          <li>
            <Link href="/">Home</Link>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={() =>
              handleMouseEnter(setShowServices, servicesTimeoutRef)
            }
            onMouseLeave={() =>
              handleMouseLeave(setShowServices, servicesTimeoutRef)
            }
          >
            <Link href="/services">
            <button className="flex items-center gap-1 hover:text-blue-500">
              Services
              <ChevronDown
                className={`transition-transform duration-300 ${
                  showServices ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            </Link>
            {showServices && (
              <ul className="absolute bg-white shadow-lg rounded-md mt-2 w-40">
                <li className="px-4 py-2 hover:bg-[#B7C0E0]">
                  <Link href="/service1">Service1</Link>
                </li>
                <li className="px-4 py-2 hover:bg-[#B7C0E0]">
                  <Link href="/service2">Service2</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Resources Dropdown */}
          <li
            className="relative"
            onMouseEnter={() =>
              handleMouseEnter(setShowResources, resourcesTimeoutRef)
            }
            onMouseLeave={() =>
              handleMouseLeave(setShowResources, resourcesTimeoutRef)
            }
          >
            <button className="flex items-center gap-1 hover:text-blue-500">
              Resources
              <ChevronDown
                className={`transition-transform duration-300 ${
                  showResources ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {showResources && (
              <ul className="absolute bg-white shadow-lg rounded-md mt-2 w-40">
                <li className="px-4 py-2 hover:bg-[#B7C0E0]">
                  <Link href="/glossary">Glossary</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
