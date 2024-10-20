"use client";
import { Equal, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

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
      <div className="flex items-center text-white w-full justify-between py-3 h-[12vh] border-b-[1px] border-neutral-400 border-opacity-25 mb-5">
        <div
          className="img w-[157.72px] cursor-pointer"
          onClick={() => handleNavigation("/")}
        >
          <img src="/logo.png" alt="Santech Logo" />
        </div>
        <div className="flex items-center gap-8 text-[#16339C]">
          <Equal
            className={`${!isNavOpen ? "flex" : "hidden"} cursor-pointer`}
            onClick={() => setIsNavOpen(true)}
          />
          <X
            className={`${isNavOpen ? "flex" : "hidden"} cursor-pointer text-white`}
            onClick={() => setIsNavOpen(false)}
          />
        </div>
      </div>

      {/* Overlay Navigation Menu */}
      <div
        className={`${
          isNavOpen ? "flex" : "hidden"
        } fixed inset-0 bg-no-repeat bg-cover z-50 flex-col items-start px-10 gap-8 py-10`}
        style={{
          backgroundImage: 'url("/ham.png")',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex gap-[580px] justify-between">
        <img src="/logo2.png" alt="Santech Logo" className="mb-8" />
        <X
          className="
           w-full h-10  text-white cursor-pointer"
          onClick={() => setIsNavOpen(false)}
        />
        </div>

        {/* Menu Links */}
        <div onClick={() => handleNavigation("/")} className={navLinksClassName}>
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
              <p
                className="cursor-pointer hover:text-blue-600"
                onClick={() => handleNavigation("/services/web-development")}
              >
                Web Development
              </p>
              <p
                className="cursor-pointer hover:text-blue-600"
                onClick={() => handleNavigation("/services/mobile-development")}
              >
                Mobile Development
              </p>
              <p
                className="cursor-pointer hover:text-blue-600"
                onClick={() => handleNavigation("/services/digital-marketing")}
              >
                Digital Marketing
              </p>
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
              <p
                className="cursor-pointer hover:text-blue-600"
                onClick={() => handleNavigation("/resources/blog")}
              >
                Blog
              </p>
              <p
                className="cursor-pointer hover:text-blue-600"
                onClick={() => handleNavigation("/resources/guides")}
              >
                Guides
              </p>
              <p
                className="cursor-pointer hover:text-blue-600"
                onClick={() => handleNavigation("/resources/case-studies")}
              >
                Case Studies
              </p>
            </div>
          )}
        </div>

        <div onClick={() => handleNavigation("/about")} className={navLinksClassName}>
          About
        </div>
        <div onClick={() => handleNavigation("/contact")} className={navLinksClassName}>
          Contact
        </div>
      </div>
    </>
  );
}
