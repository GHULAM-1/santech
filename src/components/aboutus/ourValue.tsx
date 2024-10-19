// components/ValuesSection.tsx
import React from "react";

const ValuesSection: React.FC<ValuesSectionProps> = ({
  values,
  containerGap = "6",
}) => {
  return (
    <div className="px-[80px] py-[40px]">
      <h2 className="text-3xl font-bold mb-8">Our Values</h2>
      <div className={`flex justify-center gap-${containerGap}`}>
        {values.map((value, index) => (
          <div
            key={index}
            className="flex flex-col justify-start p-5 gap-[24px]  text-white bg-cover bg-center rounded-lg"
            style={{
              width: "250px",
              height: "400px",
              backgroundImage: `url(${value.bgImage})`,
            }}
          >
            <h2 className="text-5xl font-bold mb-2">{value.number}</h2>
            <p className="text-3xl font-medium">{value.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValuesSection;
