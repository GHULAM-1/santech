"use client";
import { Equal, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HamBar() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
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

  const handleNavigation = (url: any) => {
    setIsNavOpen(false);
    router.push(url);
  };

  const navLinksClassName =
    "text-[3rem] md:text-6xl py-2  text-white font-black";

  return (
    <>
      <div className="flex items-center text-white w-full justify-between py-3 h-[12vh] border-b-[1px] border-neutral-400 border-opacity-25 mb-5">
        <div
          className="img w-[157.72px] cursor-pointer"
          onClick={() => handleNavigation("/")}
        >
          <img src="/logo.png" alt="" />
        </div>
        <div className="flex items-center gap-8 text-[#16339C]">
          <Equal
            className={`${!isNavOpen ? "flex" : "hidden"} cursor-pointer`}
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
          <X
            className={`${isNavOpen ? "flex" : "hidden"} cursor-pointer`}
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
        </div>
      </div>

      <div
        className={`${
          isNavOpen ? "flex" : "hidden"
        } fixed inset-0 bg-black z-50 flex-col items-left px-10 gap-3 font-[400] py-32`}
      >
        <X
          className="absolute top-8 right-8 w-10 h-10 text-white cursor-pointer "
          onClick={() => setIsNavOpen(false)}
        />
        <div
          onClick={() => handleNavigation("/")}
          className={`${navLinksClassName} cursor-pointer`}
        >
          Home
        </div>
        <div
          onClick={() => handleNavigation("/about")}
          className={`${navLinksClassName} cursor-pointer`}
        >
          About us
        </div>
        <div
          onClick={() => handleNavigation("/contact")}
          className={`${navLinksClassName} cursor-pointer`}
        >
          Contact us
        </div>
      
        <div
          onClick={() => handleNavigation("/portfolio")}
          className={`${navLinksClassName} cursor-pointer`}
        >
          Portfolio
        </div>
      </div>
    </>
  );
}
