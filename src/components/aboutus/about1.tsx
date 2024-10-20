import React from 'react'

export default function AboutSolutions() {
  return (
    <>
            <div className='p-5'>
                <h1 className='text-[36px] w-full lg:w-[50%] text-black font-semibold '>We Set Out to Redefine Technology Solutions</h1>
                <p className='text-neutral-900 w-full lg:w-[64%] text-[20px] font-normal'>At Santech, we are committed to delivering innovative tech solutions that drive business success and transform industries.</p>
            </div>
            <div className='flex flex-col md:flex-row w-full lg:w-[98%] gap-[17px] p-5'>
                <img className='w-full md:w-[809px] h-full md:h-[250px] lg:w-[907px] lg:h-[300px]' src="/about/about2.png" alt="" />
                <img className='w-[900px] md:w-[809px] h-[180px] md:h-[250px] lg:w-[907px] lg:h-[300px]' src="/about/about1.png" alt="" />
            </div>
      
    </>
  )
}
