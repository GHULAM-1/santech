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
      <p className="text-center text-gray-600 text-lg mb-44">
        At Santech, we combine innovation, expertise, and a client-first approach 
        to deliver solutions that drive real results. Our tailored services and 
        proven track record make us the trusted choice for businesses worldwide.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardsData.map((card, index) =>
          card.type === 'text' ? (
            <TextCard
              key={index}
              title={card.title!}
              description={card.description}
              bgColor="bg-green-100"
            />
          ) : (
            <ImageCard
              key={index}
              image={card.image!}
              description={card.description}
              extraClass={index === 1 ? ' ' : ''}
            />
          )
        )}
      </div>
    </div>
  );
}
