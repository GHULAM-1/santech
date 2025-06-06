"use client";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { aserviceData } from "@/data/aserviceData";// Import the service data

export default function HamBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add("no-scroll");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("no-scroll");
      document.body.style.overflow = "";
    }
  }, [isNavOpen]);

  const handleNavigation = (url: string) => {
    setIsNavOpen(false);
    setIsServicesOpen(false); // Close dropdowns on navigation
    setIsResourcesOpen(false);
    router.push(url);
  };

  const toggleDropdown = (dropdown: string) => {
    if (dropdown === "services") {
      setIsServicesOpen((prev) => !prev);
      setIsResourcesOpen(false); // Close other dropdown
    } else if (dropdown === "resources") {
      setIsResourcesOpen((prev) => !prev);
      setIsServicesOpen(false);
    }
  };

  const navLinksClassName =
    "text-2xl md:text-3xl py-2 text-white font-medium cursor-pointer";

  return (
    <>
      {/* Navbar Header */}
      <div className="flex items-center px-[24px] text-white w-full justify-between py-3 h-[64px] border-b-[1px] border-neutral-400 border-opacity-25 ">
        <div
          className="img w-full cursor-pointer"
          onClick={() => handleNavigation("/")}
        >
          <img
            className="w-[115px] h-[23px]"
            src="/Logo.png"
            alt="Santech Logo"
          />
        </div>
        <div className="flex items-center gap-8 text-primary">
          <Menu
            className={`${!isNavOpen ? "flex" : "hidden"} cursor-pointer`}
            onClick={() => setIsNavOpen(true)}
          />
        </div>
      </div>

      {/* Overlay Navigation Menu */}
      <div
        className={`${
          isNavOpen ? "flex" : "hidden"
        } fixed inset-0 bg-no-repeat bg-contain z-50 flex-col items-start px-4 gap-[18px] py-10`}
        style={{
          backgroundImage: 'url("/ham.png")',
          backgroundPosition: "end",
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-between items-center w-full">
          <div className="">
            <img
              src="/logo2.png"
              alt="Santech Logo"
              className="mb-8 w-[154px] h-[31px]"
            />
          </div>
          <div className="w-[40px] h-[40px]">
            <X
              className="text-white cursor-pointer p-[4px]"
              onClick={() => setIsNavOpen(false)}
            />
          </div>
        </div>

        {/* Menu Links */}
        <div
          onClick={() => handleNavigation("/")}
          className={navLinksClassName}
        >
          Home
        </div>

        {/* Services Dropdown */}
        <div className="relative">
          <div
            onClick={() => toggleDropdown("services")}
            className={`${navLinksClassName} flex items-center gap-2`}
          >
            Services <ChevronDown />
          </div>

          {isServicesOpen && (
            <div className="ml-6 text-[24px] space-y-2 text-white">
              {aserviceData.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                >
                  <p
                    className="cursor-pointer hover:text-blue-600"
                    onClick={() => handleNavigation(`/services/${service.id}`)}
                  >
                    {service.serviceName}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Resources Dropdown */}
        <div className="relative">
          <div
            onClick={() => toggleDropdown("resources")}
            className={`${navLinksClassName} flex items-center gap-2`}
          >
            Resources <ChevronDown />
          </div>
          {isResourcesOpen && (
            <div className="ml-6 space-y-2 text-[24px] text-white">
              <Link href="/glossary">
                <p
                  className="cursor-pointer hover:text-blue-600"
                  onClick={() => handleNavigation("/resources/blog")}
                >
                  Glossary
                </p>
              </Link>
            </div>
          )}
        </div>

        <div
          onClick={() => handleNavigation("/about")}
          className={navLinksClassName}
        >
          About
        </div>
        <div
          onClick={() => handleNavigation("/contact")}
          className={navLinksClassName}
        >
          Contact
        </div>
        <div
          onClick={() => handleNavigation("/blog")}
          className={navLinksClassName}
        >
          Blogs
        </div>
      </div>
    </>
  );
}
