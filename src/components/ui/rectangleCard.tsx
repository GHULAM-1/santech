import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface RectangleCardProps {
  heading?: string;  // Optional heading
  headimg?: string;  // Optional image for heading
  img?: string;      // Optional main image
  paraline?: string;
  container?:string // Optional paragraph text
}

export default function RectangleCard({
  heading,
  headimg,
  img,
  paraline,
  container,
}: RectangleCardProps) {
  return (
    <div className={cn("w-[273px] h-[150px] p-4 bg-white rounded-lg shadow-md flex flex-col gap-4",container)}>
      {/* Optional Heading Section */}

      {headimg && (
        <Image
          src={headimg}
          alt="Header Image"
          width={60}
          height={60}
          className="rounded-full"
        />
      )}
      {heading && (
        <h2 className="text-xl font-semibold text-green-600">{heading}</h2>
      )}

      {/* Optional Header Image */}
    

      {/* Optional Main Image */}
      {img && (
        <Image
          src={img}
          alt="Main Image"
          width={250}
          height={150}
          className="rounded-md object-cover"
        />
      )}

      {/* Optional Paragraph Text */}
      {paraline && (
        <p className="text-gray-700 text-[14px] ">{paraline}</p>
      )}
    </div>
  );
}
