'use client';
import Image from 'next/image';
import { Button } from './ui/button';

interface SectionProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  image: string;
}

export default function FeaturedSection({
  title,
  subtitle,
  description,
  buttonText,
  image,
}: SectionProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:h-screen bg-blue-900">

      {/* Text Content Section */}
      <div className="w-full md:w-[750px] flex flex-col justify-center px-10 md:px-20 py-10 text-white">
        <span className="bg-green-100 text-[#037940] px-4 py-1 rounded-full mb-4 w-max text-sm font-semibold">
          {subtitle}
        </span>
        <h1 className="text-4xl md:text-[36px] font-bold leading-tight mb-6">
          {title}
        </h1>
        <p className="text-lg leading-relaxed mb-8">{description}</p>

        <Button className="bg-[#05DC75] w-[110px] px-[20px] py-[12px] text-[14px] hover:bg-green-600 text-black font-medium rounded-none">
          {buttonText} <span>&rarr;</span>
        </Button>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 relative h-[500px] lg:h-auto">
        <Image
          src={image}
          alt="Real Estate"
          layout="fill"
          objectFit="cover"
          priority
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
