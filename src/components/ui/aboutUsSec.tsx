import React from "react";
const AboutUs: React.FC<AboutUsProps> = ({ title, description, image }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[#E8EBF5] py-12  ">
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt="About Us"
          className="rounded-lg  w-[720px] object-contain shadow-lg"
        />
      </div>
      {/* Text Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-10 text-left px-[70px]">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          {title}
        </h2>
        <p className="text-gray-600 text-[16px] leading-relaxed">
        {description[0]}
        </p>
        < br/>
        <p className="text-gray-600 text-[16px] leading-relaxed">
        {description[1]}
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
