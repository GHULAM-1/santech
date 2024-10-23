import React from "react";
import Navbar from "./navigationDropDwon";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function NavBar() {
  return (
    <>
      <div className="flex justify-between px-[73px] gap-[8px] items-center py-5">
        <div className="flex gap-[56px] items-end">
          <div>
            <a href="/">
            <img className="w-[150PX] h-[32px]" src="/Logo.png" alt="" />
            </a>
          </div>
          <div>
            <Navbar/>
          </div>
        </div>
        <div>
          <Button className="bg-[#16339C] text-[14px] text-white">
            Get Started
            <ArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
}
