'use client';
import ImageCard from './ui/imgCards';
import TextCard from './ui/textCards';
import { cardsData } from '@/data/whyChoseUsData';
import SquareCard from './ui/squareCard';
import RectangleCard from './ui/rectangleCard';

export default function WhyChooseUs() {
  return (
    <div className="py-12 px-6 md:px-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-6">Why Choose us?</h2>
      <p className="text-center text-gray-600 text-lg mb-12 md:mb-20">
        At Santech, we combine innovation, expertise, and a client-first approach 
        to deliver solutions that drive real results. Our tailored services and 
        proven track record make us the trusted choice for businesses worldwide.
      </p>

      <div className="p-11 grid grid-cols-1 justify-items-center md:grid-cols-4 gap-10 md:gap-64 xl:gap-32">
        <div className=''>
          <div className='mb-3'>
        <RectangleCard
        container='bg-[#B2F4D4]'
        heading='Expert Team'
        paraline='A talented, diverse team dedicated to delivering top tech solutions.'
        />
        </div>
        <SquareCard
          fullimg='/cards/card1.png'/>
        </div>
      
      <div>
        <div className='mb-3'>
        <SquareCard
          fullimg='/cards/card2.png'/>
          </div>

        <RectangleCard
        container='bg-[#B2F4D4]'
        heading='2500+'
        paraline='Successful Businesses Launched Across Various Sectors'
        />
        </div>
        <div>
          <div className='mb-3'>
          <RectangleCard
          container='bg-[#B2F4D4]'
          heading='96%'
          paraline='Clients Recommend Our Services to Their Network'
          />
          </div>
        <SquareCard
          fullimg='/cards/card3.png'/>

        </div>
        <div>
          <div className='mb-3'>
        <SquareCard
          fullimg='/cards/card4.png'/>
          </div>
          <RectangleCard
          container='bg-[#B2F4D4]'
          heading='Transparent Pricing'
          paraline='We believe in clear, upfront pricing with no hidden fees.'
          />

        </div>
      </div>
      </div>
  
  );
}
