import React from 'react'
import { Button } from '../ui/button'

export default function ServicesHero() {
  return (
    <>

        <div className='bg-[#16339C] text-white flex flex-col lg:flex-row justify-center items-center'>
            <div className='px-[32px] lg:px-[80px] flex flex-col gap-[10px] lg:gap-[20px] lg:w-[70%] w-full py-7 lg:py-0'>
                <h1 className='text-[30px] lg:text-[36px] font-semibold'>Empower Your Business with Expert COO Leadership</h1>
                <p>Scale your operations, streamline processes, and drive sustainable growth with on-demand COO expertise tailored to your business needs.</p>
                <Button className='bg-[#05DC75] w-[149px] text-black rounded-none hover:bg-green-700'>Book a meet <span>&rarr;</span></Button>
            </div>
            <div className='w-full '> 
                <img className="w-full h-[480px] object-cover"  src="/servicehero.png" alt="" />
            </div>
        </div>
      
    </>
  )
}
