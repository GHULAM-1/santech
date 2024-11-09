import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ServicesHero() {
  return (
    <>

        <div className='bg-[#16339C] text-white flex flex-col lg:flex-row justify-center items-center'>
            <div className='px-[32px] lg:px-[80px] flex flex-col gap-[10px] lg:gap-[20px]  w-full py-7 lg:py-0'>
                <h1 className='text-[30px] lg:text-[36px] font-semibold leading-[40px]'>Empower Your Business with Expert COO Leadership</h1>
                <p className='text-[16px] font-normal leading-[24px]'>Scale your operations, streamline processes, and drive sustainable growth with on-demand COO expertise tailored to your business needs.</p>
                <Link href="/contact">
                <Button className='bg-[#05DC75] w-[149px] text-black rounded-[4px] hover:bg-green-700 p-[12px]'>Book a meet <span className=" font-[400]"><ArrowRight/></span></Button>
                </Link>
            </div>
            <div className=' w-full flex lg:justify-end '> 
                <img className="md:w-[744px] md:h-[320px]  lg:w-[720px] lg:h-[640px] object-cover"  src="/servicehero.png" alt="" />
            </div>
        </div>
      
    </>
  )
}
