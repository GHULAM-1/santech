// OutcomeList.tsx
import React from 'react';
import { FaCheck } from 'react-icons/fa';

interface OutcomeListProps {
  outcomes: string[];
}

const OutcomeList = ({ outcomes }: OutcomeListProps) => {
  return (
    <ul className="space-y-4">
      {outcomes.map((outcome, index) => (
        <li key={index} className="flex text-[14px] font-[400] leading-[20px] items-start text-gray-700 gap-[12px]">
          <FaCheck className="text-blue-600 mt-1" />
          <p>{outcome}</p>
        </li>
      ))}
    </ul>
  );
};

export default OutcomeList;
