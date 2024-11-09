import React from "react";


export default function PageHeading({
  heading,
  description,
}: {
  heading: string | undefined;
  description: string | undefined;
}) {
  return (
    <div className="flex md:flex-row flex-col mt-20 md:mt-28 justify-between items-center md:items-end w-full  max-w-[1365px]  border-b-[1px] border-neutral-400 border-opacity-20 pb-7 md:pb-28 mb-2 md:mb-10">
      
      {heading && (
        <div className="leading-[1.15] tracking-tighter text-[40px] md:text-[55px] md:w-[740px] text-white font-[500] w-[100%] ">
         
          <span className="text-black md:block hidden">blank</span>
          {heading}
        </div>
      )}
      {description && (
        <div className="w-full md:w-[410px] mt-10 md:mt-0 text-[16px] text-neutral-400">
          {description}
        </div>
      )}
    </div>
  );
}
