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
        "flex flex-col items-center px-[80px] py-[48px] bg-white shadow-sm", 
        containerClass
      )}
    >
      <p className={cn("text-black text-lg mb-6", paraClass)}>
        {title}
      </p>
      <div
        className={cn(
          "flex flex-wrap justify-between items-center gap-[80px]", 
          logoDiv
        )}
      >
        {companiesData.map((company) => (
          <img
            key={company.name}
            src={company.logo}
            alt={company.alt}
            className={cn("w-[135px] object-contain ", imageClass)}
          />
        ))}
      </div>
    </div>
  );
};

export default TrustedBySection;
