import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface RectangleCardProps {
  heading?: string;  // Optional heading
  headimg?: string;  // Optional image for heading
  img?: string;      // Optional main image
  paraline?: string;
  container?:string;
  headclr?:string // Optional paragraph text
}

export default function RectangleCard({
  heading,
  headimg,
  img,
  paraline,
  container,
  headclr,
}: RectangleCardProps) {
  return (
    <div className={cn("w-[272px] h-[160px] p-4 bg-white rounded-[8px] shadow-md flex flex-col gap-4 justify-between",container)}>
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
        <h2 className={cn("text-[24px] font-[400] text-green-600",headclr)}>{heading}</h2>
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
        <p className="text-[#040817] text-[14px] font-[400] leading-[20px] ">{paraline}</p>
      )}
    </div>
  );
}
