'use client';
import RectangleCard from './ui/rectangleCard';
import SquareCard from './ui/squareCard';

export default function WhyChooseUs() {
  return (
    <div className="flex flex-col gap-12 py-16 px-6 md:px-20 bg-white">
      {/* Header Section */}

      <div className="text-center">
        <h2 className="text-2xl lg:text-4xl font-semibold mb-4">Why Choose us?</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          At Santech, we combine innovation, expertise, and a client-first approach
          to deliver solutions that drive real results. Our tailored services and
          proven track record make us the trusted choice for businesses worldwide.
        </p>
      </div>

      {/* Cards Section */}
      <div className='flex justify-center '>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8">
        {/* First Column */}
        <div className="space-y-6">
          <RectangleCard
            container="bg-[#B2F4D4]"
            headclr="text-black"
            heading="Expert Team"
            paraline="A talented, diverse team dedicated to delivering top tech solutions."
          />
          <SquareCard fullimg="/cards/card1.png" />
        </div>

        {/* Second Column */}
        <div className="space-y-6">
          <SquareCard fullimg="/cards/card2.png" />
          <RectangleCard
            container="bg-[#B2F4D4]"
            headclr="text-black"
            heading="2500+"
            paraline="Successful Businesses Launched Across Various Sectors"
          />
        </div>

        {/* Third Column */}
        <div className="space-y-6">
          <RectangleCard
            container="bg-[#B2F4D4]"
            headclr="text-black"
            heading="96%"
            paraline="Clients Recommend Our Services to Their Network"
          />
          <SquareCard fullimg="/cards/card3.png" />
        </div>

        {/* Fourth Column */}
        <div className="space-y-6">
          <SquareCard fullimg="/cards/card4.png" />
          <RectangleCard
            container="bg-[#B2F4D4]"
            headclr="text-black"
            heading="Transparent Pricing"
            paraline="We believe in clear, upfront pricing with no hidden fees."
          />
        </div>
        </div>
      </div>
    </div>
  );
}
