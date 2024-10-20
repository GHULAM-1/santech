import React from "react";
const AboutUs: React.FC<AboutUsProps> = ({ title, description, image }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-[#E8EBF5]  pb-12 ">
      <div className="w-full lg:w-1/2 ">
        <img
          src={image}
          alt="About Us"
          className="rounded-lg w-full lg:w-[720px] shadow-lg object-contain"
        />
      </div>
      {/* Text Section */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 md:ml-10 text-left px-8 md:px-[120px] lg:px-[70px]">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          {title}
        </h2>
        <p className="text-gray-600 font-[400] text-[16px]  leading-[24px]">
          {description[0]}
        </p>
        <br />
        <p className="text-gray-600 font-[400] text-[16px] leading-relaxed">
          {description[1]}
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
