import React from 'react'

export default function AboutSolutions() {
  return (
    <>
            <div className=''>
                <h1 className='text-[24px] leading-[32px] lg:text-[36px] mb-[16px] lg:leading-[40px] w-full lg:w-[50%] text-black font-semibold '>We Set Out to Redefine Technology Solutions</h1>
                <p className='text-neutral-900 text-[18px] lg:text-[20px]  w-full lg:w-[80%] leadin-[28px] font-[400]'>At Santech, we are committed to delivering innovative tech solutions that drive business success and transform industries.</p>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center lg:flex-grow gap-[20px] '>
              <div className='flex flex-grow'>
                <img className=' lg:w-full lg:h-[400px] rounded-[8px] w-[272px] h-[120px] md:w-[419px] md:h-[200px] object-cover' src="/about/about2.png" alt="" />
                </div>
                <div className='flex flex-grow '>
                <img className='lg:w-full lg:h-[400px] rounded-[8px] md:h-[200px] md:w-[241px] xl:h-[400px] h-[120px] w-[272px] object-cover ' src="/about/about1.png" alt="" />
                </div>
            </div>
      
    </>
  )
}
