import React from "react";
const AboutUs: React.FC<AboutUsProps> = ({ title, description, image }) => {
  return (
    <div className="flex flex-col  lg:flex-row items-center justify-between bg-[#E8EBF5]  ">
      <div className="w-full lg:w-1/2 ">
        <img
          src={image}
          alt="About Us"
          className="rounded-lg w-[320px] h-[360px] md:w-[744px] lg:h-[640px] lg:w-[720px] shadow-lg object-cover"
        />
      </div>
      {/* Text Section */}
      <div className="w-full lg:w-1/2  text-[#040817] lg:mt-0 md:ml-10 text-left px-[24px] py-[40px] lg:py-0 md:px-[120px] lg:px-[80px]">
        <h2 className="text-[24px] lg:text-[36px] font-[600] mb-4">
          {title}
        </h2>
        <p className=" font-[400] text-[16px] leading-[24px]">
        {description[0]}
        </p>
        < br/>
        <p className=" font-[400] text-[16px] leading-[24px]">
        {description[1]}
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
