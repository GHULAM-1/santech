import React from "react";
import { FaClock, FaVideo } from "react-icons/fa";
// import { CalendarDemo } from "./calender";
// import TimeZoneSelector from "./ui/timeZone";
// import { Button } from "react-day-picker";
import { Button } from "./ui/button";

export default function BookMeeting() {
  return (
    <div className="bg-[#16339C] min-h-screen flex items-center justify-center p-[80px]">
      <div className="flex flex-col items-center">
        <h2 className="text-[36px] font-medium text-white">
          Book a Meeting with Us
        </h2>
        <p className="w-[52%] text-center text-[18px] mt-[16px] text-[#E0E1E3]">
          Easily schedule a time to connect with our experts and explore how
          Santech can help drive your business forward.
        </p>

        <div className="mt-[40px] flex w-[800px] p-[24px] bg-white rounded-lg shadow-lg">
          {/* Left Section */}
          <div className="w-[50%] text-black space-y-4">
            <div className="flex flex-col gap-[8px]">
              <img className="w-[124px]" src="/logo.png" alt="Santech Logo" />
              <p className="text-[#1A1A1A99]">santech</p>
              <h2 className="text-xl font-semibold">Client Service</h2>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FaClock className="text-[#1A1A1A99]" />
                <p className="text-[#1A1A1A99]">30 min</p>
              </div>
              <div className="flex items-center gap-2">
                <FaVideo className="text-[#1A1A1A99]" />
                <p className="text-[#1A1A1A99]">
                  Web conferencing details provided upon confirmation.
                </p>
              </div>
            </div>

            <p className="text-gray-700">
              This is an example of a meeting you would have with a potential
              customer to demonstrate your product.
            </p>

            <div className="flex justify-between text-sm text-[#1A1A1A99]">
              <p className="hover:underline cursor-pointer">Cookie settings</p>
              <p className="hover:underline cursor-pointer">Report abuse</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col w-[50%] ml-8">
            <h1 className="text-[#1A1A1A] text-[20px] font-bold">
              Select a Date & Time
            </h1>

            {/* Uncomment if you want to add the calendar */}
            {/* <div className="flex justify-center items-center text-black mt-4">
              <CalendarDemo />
            </div> */}

            <h1 className="text-[16px] font-bold text-[#1A1A1A] mt-4">
              Time zone
            </h1>

            {/* Uncomment if using TimeZoneSelector */}
            {/* <div className="mt-2">
              <TimeZoneSelector />
            </div> */}

            <Button className="text-[14px] border border-[#1A1A1A] w-[50%] rounded-full bg-transparent p-4 mt-8">
              Troubleshooting
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
