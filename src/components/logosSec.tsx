import React from "react";
import { companies } from "@/data/comapnyData";
import { cn } from "@/lib/utils";

const TrustedBySection = ({
  title = "Trusted by Leading Companies Worldwide",
  companiesData = companies,
  containerClass = "",
  imageClass = "",
  paraClass = "",
  logoDiv = "",
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-[40px] p-6 lg:px-[80px] lg:py-[48px] bg-white shadow-sm", 
        containerClass
      )}
    >
      <p className={cn("text-black text-base md:text-lg ", paraClass)}>
        {title}
      </p>
      <div
        className={cn(
          "flex flex-wrap content-center gap-8 justify-between items-center  lg:gap-[80px]", 
          logoDiv
        )}
      >
        {companiesData.map((company) => (
          <img
            key={company.name}
            src={company.logo}
            alt={company.alt}
            className={cn("w-[61px] sm:h-[24px] h-[48px] lg:w-[135px] object-contain lg:object-cover ", imageClass)}
          />
        ))}
      </div>
    </div>
  );
};

export default TrustedBySection;
