'use client';

import React from 'react';
import Image from 'next/image';
import { ReactNode } from "react";
import { IconType } from 'react-icons';
import { cn } from '@/lib/utils'; // Assuming `cn` is a utility for combining class names

interface SquareCardProps {
  name?: string;
  role?: string;
  avatar?: string;
  description?: string;
  fullimg?: string; 
  icon?: IconType; // icon from react-icons
  newicon?: ReactNode; // newicon as ReactNode (can accept any component)
  title?: string;
  container?: string;
  flexprop?: string;
}

export default function SquareCard({
  name,
  role,
  avatar,
  description,
  fullimg,
  icon: Icon, // Destructure the icon for rendering from react-icons
  newicon, // Destructure the newicon
  title,
  container,
  flexprop,
}: SquareCardProps) {
  return (
    <div
      className={cn(
        "w-[273px] rounded-[8px] shadow-md overflow-hidden bg-white", container,
        fullimg ? "p-0" : "p-[32px]"
      )}
    >
      {fullimg ? (
        // Full image covers the entire card
        <Image
          src={fullimg}
          alt={name || 'Full Image'}
          width={241}
          height={204}
          className="object-cover w-full h-full"
        />
      ) : (
        <div className={cn("flex flex-row items-center gap-4", flexprop)}>
          {avatar && (
            <Image
              src={avatar}
              alt={name || 'Avatar'}
              width={40}
              height={40}
              className="rounded-full"
            />
          )}

          {/* Optional Icon for New Design */}
          {/* If newicon is provided, use it, otherwise fall back to Icon from react-icons */}
          {newicon ? (
            <div className="w-12 h-12 text-blue-600  rounded-full flex items-center justify-center">
              {newicon} {/* Render newicon directly */}
            </div>
          ) : Icon ? (
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <Icon className="text-white w-[40px] h-[40px]" /> {/* Render react-icon if newicon is not provided */}
            </div>
          ) : null}

          <div>
            {name && <h4 className="text-[14px] font-[400] leading-[20px]">{name}</h4>}
            {role && <p className="text-[12px] font-[400] leading-[16px] text-[#0F0C00]">{role}</p>}
            {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
          </div>
        </div>
      )}

      {description && (
        <p className="font-[400] text-[16px] mt-4 text-gray-700 leading-[24px]">
          {description}
        </p>
      )}
    </div>
  );
}
