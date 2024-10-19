'use client';


const TextCard: React.FC<TextCardProps> = ({ title, description, bgColor }) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md ${
        bgColor ? bgColor : 'bg-green-100'
      } h-[188px]`}
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-8">{title}</h3>
      <p className="text-gray-600 text-md">{description}</p>
    </div>
  );
};

export default TextCard;
