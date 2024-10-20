'use client';
import Image from 'next/image';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react'

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
    <div className="flex flex-col lg:flex-row lg:h-screen bg-primary">

      {/* Text Content Section */}
      <div className="w-full md:w-[750px] flex flex-col justify-center p-[32px] lg:px-[80px]  text-white gap-[16px]">
        <span className="bg-green-100 text-[#037940] p-[8px]  rounded-full  text-[12px] font-semibold w-[70px] h-[32px] ">
          {subtitle}
        </span>
        <h1 className="text-[24px] md:text-[36px] text-#FDFCFB font-[600] lg:leading-[40px] leading-[32px] ">
          {title}
        </h1>
        <p className="text-[16px] leading-[24px] font-[400]  text-#FDFCFB">{description}</p>

        <Button className="bg-accent w-[110px] px-[20px] py-[12px] text-[14px] hover:bg-green-600 text-black font-medium rounded-[4px]">
          {buttonText} <span><ArrowRight/></span>
        </Button>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 relative h-[360px] lg:h-auto">
        <Image
          src={image}
          alt="Real Estate"
          layout="fill"
          objectFit="cover"
          priority
          className="rounded-lg lg:w-[720px] lg:h-full w-full h-[360px]"
        />
      </div>
    </div>
  );
}
