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
        "flex flex-col items-center p-6 lg:px-[80px] lg:py-[48px] bg-white shadow-sm", 
        containerClass
      )}
    >
      <p className={cn("text-black text-base md:text-lg mb-6", paraClass)}>
        {title}
      </p>
      <div
        className={cn(
          "flex flex-wrap justify-between items-center gap-7 lg:gap-[80px]", 
          logoDiv
        )}
      >
        {companiesData.map((company) => (
          <img
            key={company.name}
            src={company.logo}
            alt={company.alt}
            className={cn("w-[80px] lg:w-[135px] object-contain ", imageClass)}
          />
        ))}
      </div>
    </div>
  );
};

export default TrustedBySection;
