import React from "react";
import { companies } from "@/data/comapnyData";

const TrustedBySection = () => {

  return (
    <div className="flex justify-evenly items-start -mt-6 py-8 bg-white shadow-sm">
      <p className="text-black text-lg mb-6 w-[18%]">
        Trusted by Leading Companies Worldwide
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {companies.map((company) => (
          <img
            key={company.name}
            src={company.logo}
            alt={company.alt}
            className=" w-[135px] object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default TrustedBySection;
