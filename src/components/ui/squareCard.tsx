'use client';

import React from 'react';
import Image from 'next/image';
import { IconType } from 'react-icons'; // Import IconType from react-icons

interface SquareCardProps {
  name?: string;
  role?: string;
  avatar?: string;
  description?: string;
  fullimg?: string; 
  icon?: IconType; 
  title?: string;
}

export default function SquareCard({
  name,
  role,
  avatar,
  description,
  fullimg,
  icon: Icon, // Destructure the icon for rendering
  title,
}: SquareCardProps) {
  return (
    <div
      className={`w-[268px] border rounded-lg shadow-md overflow-hidden bg-white ${
        fullimg ? 'p-0' : 'p-4'
      }`}
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
        <div className="flex flex-col gap-4 items-start">
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
              <Icon className="text-white w-6 h-6" /> {/* Icon rendering */}
            </div>
          )}

          <div>
            {name && <h4 className="text-lg font-semibold">{name}</h4>}
            {role && <p className="text-sm text-gray-500">{role}</p>}
            {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
            {description && (
              <p className="mt-2 mb-6 text-sm text-gray-700 leading-snug">
                {description}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
