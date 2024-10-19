import React from "react";
import ClientService from "./clientService";
import CalCom from "./ui/calendar";


export default function BookMeeting() {
  return (
    <div className="bg-[#16339C] min-h-screen flex items-center justify-center p-[80px]">
      <div className="flex flex-col items-center">
        <h2 className="text-[36px] font-medium text-white">
          Book a Meeting with Us
        </h2>
        <p className="w-[52%] text-center text-[18px] mt-[16px] text-[#E0E1E3] mb-16">
          Easily schedule a time to connect with our experts and explore how
          Santech can help drive your business forward.
        </p>
        <CalCom/>
      </div>
    </div>
  );
}
