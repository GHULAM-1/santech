import React from "react";

import CalCom from "./ui/calendar";


export default function BookMeeting() {
  return (
    <div className="bg-[#16339C] flex items-center justify-center p-[40px] md:p-[80px]">
      <div className="flex flex-col items-center">
        <h2 className="text-[29px] md:text-[36px] font-medium text-white">
          Book a Meeting with Us
        </h2>
        <p className="w-full md:w-[52%] text-center text-[18px] mt-[16px] text-[#E0E1E3] mb-16">
          Easily schedule a time to connect with our experts and explore how
          Santech can help drive your business forward.
        </p>
        <CalCom/>
      </div>
    </div>
  );
}
