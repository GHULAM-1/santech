import React from 'react';
import Image from 'next/image';

interface SquareCardProps {
  name?: string;
  role?: string;
  avatar?: string;
  description?: string;
  fullimg?: string; // If provided, the full image covers the card
}

export default function SquareCard({
  name,
  role,
  avatar,
  description,
  fullimg,
}: SquareCardProps) {
  return (
    <div
      className={`w-[268px]  rounded-lg shadow-md overflow-hidden bg-white ${
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
        <div className="flex gap-4 items-start">
          {avatar && (
            <Image
              src={avatar}
              alt={name || 'Avatar'}
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
          <div>
            {name && <h4 className="text-lg font-semibold">{name}</h4>}
            {role && <p className="text-sm text-gray-500">{role}</p>}
            {description && (
              <p className="mt-2 text-sm text-gray-700 leading-snug">
                {description}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
