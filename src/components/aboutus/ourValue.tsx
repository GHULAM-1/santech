// components/ValuesSection.tsx
import React from "react";
import { ValuesSectionProps } from "@/types/all-types";
const ValuesSection: React.FC<ValuesSectionProps> = ({
  values,
  containerGap = "6",
}) => {
  return (
    <div className="p-[24px] lg:px-[80px] lg:py-[40px] ">
      <h2 className="text-[24px] font-[600] leading-[32px] mb-[40px]">Our Values</h2>

      <div className="">
      <div className={`flex flex-wrap justify-center gap-[16px]`}>
        {values.map((value, index) => (
          <div
            key={index}
            className="
              flex flex-col justify-start p-5 gap-[24px] 
              text-white bg-cover bg-center rounded-lg 
              w-[272px] lg:w-[250px] h-[400px]"
            style={{
              backgroundImage: `url(${value.bgImage})`,
            }}
          >
            <h2 className="text-[36px] font-[600] leading-[40px] ">{value.number}</h2>
            <p className="text-[36px] font-[600] leading-[40px]">{value.title}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ValuesSection;
