'use client';
import ImageCard from './ui/imgCards';
import TextCard from './ui/textCards';
import { cardsData } from '@/data/whyChoseUsData';
import SquareCard from './ui/squareCard';
import RectangleCard from './ui/rectangleCard';

export default function WhyChooseUs() {
  return (
    <div className="flex flex-col gap-[56px] py-[32px] px-6 md:px-20 bg-white">
      <div>
      <h2 className="text-[24px] lg:text-[36px] font-[600] text-center mb-1">Why Choose us?</h2>
      <p className="text-center text-gray-600 text-[20] font-[400] leading-[28px]">
        At Santech, we combine innovation, expertise, and a client-first approach 
        to deliver solutions that drive real results. Our tailored services and 
        proven track record make us the trusted choice for businesses worldwide.
      </p>
      </div>

      <div className="grid grid-cols-1 justify-items-center  md:grid-cols-2 lg:grid-cols-4 gap-[16px] md:gap-0 lg:gap-[20px] self-stretch">
        <div className=''>
          <div className='mb-[24px] md:mb-3'>
        <RectangleCard
        container='bg-[#B2F4D4]'
        headclr='text-black'
        heading='Expert Team'
        paraline='A talented, diverse team dedicated to delivering top tech solutions.'
        />
        </div>
        <SquareCard
          fullimg='/cards/card1.png'/>
        </div>
      
      <div>
        <div className='mb-[24px] md:mb-3'>
        <SquareCard
          fullimg='/cards/card2.png'/>
          </div>

        <RectangleCard
        container='bg-[#B2F4D4]'
        headclr='text-black'
        heading='2500+'
        paraline='Successful Businesses Launched Across Various Sectors'
        />
        </div>
        <div>
          <div className='mb-[24px] md:mb-3'>
          <RectangleCard
          container='bg-[#B2F4D4]'
          headclr='text-black'
          heading='96%'
          paraline='Clients Recommend Our Services to Their Network'
          />
          </div>
        <SquareCard
          fullimg='/cards/card3.png'/>

        </div>
        <div>
          <div className='mb-[24px] md:mb-3'>
        <SquareCard
          fullimg='/cards/card4.png'/>
          </div>
          <RectangleCard
          container='bg-[#B2F4D4]'
          headclr='text-black'
          heading='Transparent Pricing'
          paraline='We believe in clear, upfront pricing with no hidden fees.'
          />

        </div>
      </div>
      </div>
  
  );
}
