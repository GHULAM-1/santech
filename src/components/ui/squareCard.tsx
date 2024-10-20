'use client';

import React from 'react';
import Image from 'next/image';
import { IconType } from 'react-icons';
import { cn } from '@/lib/utils'; // Import IconType from react-icons

interface SquareCardProps {
  name?: string;
  role?: string;
  avatar?: string;
  description?: string;
  fullimg?: string; 
  icon?: IconType; 
  title?: string;
  container?:string;
}

export default function SquareCard({
  name,
  role,
  avatar,
  description,
  fullimg,
  icon: Icon, // Destructure the icon for rendering
  title,
  container,
}: SquareCardProps) {
  return (
    <div
    className={cn(
      "w-[273px]  rounded-[8px] shadow-md overflow-hidden bg-white", container,
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
        <div className="flex flex-row items-center gap-4 ">
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
          
          {Icon && (
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <Icon className="text-white w-[40px] h-[40px]" /> {/* Icon rendering */}
            </div>
          )}

          <div>
            {name && <h4 className="text-[14px]  font-[400] leading-[20px]">{name}</h4>}
            {role && <p className="text-[12px] font-[400] leading-[16px] text-[#0F0C00]">{role}</p>}
            {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
          </div>
          </div>
      
      )}
      {description && (
        <p className=" font-[400] text-[16px] mt-4 text-gray-700 leading-[24px]">
          {description}
        </p>
      )}
    </div>
  );
}
