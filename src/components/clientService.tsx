'use client';

import React from 'react';
import { FaClock, FaVideo } from 'react-icons/fa';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface ClientServiceProps {
  containerStyle?: React.CSSProperties;
  className?: string;
}

export default function ClientService({
  containerStyle = {},
  className = '',
}: ClientServiceProps) {
  return (
    <div
      className={cn(
        'mt-[40px] flex w-[800px] p-[24px] bg-white rounded-lg shadow-lg',
        className
      )}
      style={containerStyle}
    >
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

      <div className="flex flex-col w-[50%] ml-8">
        <h1 className="text-[#1A1A1A] text-[20px] font-bold">
          Select a Date & Time
        </h1>
        <h1 className="text-[16px] font-bold text-[#1A1A1A] mt-4">Time zone</h1>
        <Button className="text-[14px] border border-[#1A1A1A] w-[50%] rounded-full bg-transparent p-4 mt-8">
          Troubleshooting
        </Button>
      </div>
    </div>
  );
}
