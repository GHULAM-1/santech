'use client';
import Image from 'next/image';



const ImageCard: React.FC<ImageCardProps> = ({
  image,
  description,
  extraClass = '',
}) => {
  return (
    <div className={`rounded-lg shadow-md overflow-hidden -mt-10 ${extraClass}`}>
      <Image
        src={image}
        alt={description || 'Card image'}
        width={300}
        height={200}
        className="object-cover w-full h-[150px] md:h-[290px]"
      />
      {description && (
        <p className="p-4 text-gray-600 text-md">{description}</p>
      )}
    </div>
  );
};

export default ImageCard;
