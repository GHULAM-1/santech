'use client';

import React from 'react';

// Define prop types for the TextCard
interface TextCardProps {
  title: string;
  description: string|undefined;
  bgColor?: string;
  socialIcons?: React.ReactNode[]; // Optional prop for social icons
}

const TextCard: React.FC<TextCardProps> = ({
  title,
  description,
  bgColor,
  socialIcons,
}) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md ${
        bgColor ? bgColor : 'bg-green-100'
      } h-auto flex flex-col justify-between`}
    >
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
        <div className="text-gray-600 text-md">
          {description?.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
      {socialIcons && (
        <div className="flex mt-4 gap-3">
          {socialIcons.map((icon, index) => (
            <span key={index}>{icon}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default TextCard;
