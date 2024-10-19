import React from 'react'
import { Button } from '../ui/button'

export default function ServicesHero() {
  return (
    <>

        <div className='bg-[#16339C] text-white flex justify-center items-center'>
            <div className='px-[80px] flex flex-col gap-[20px] w-[70%]'>
                <h1 className='text-[36px] font-semibold'>Empower Your Business with Expert COO Leadership</h1>
                <p>Scale your operations, streamline processes, and drive sustainable growth with on-demand COO expertise tailored to your business needs.</p>
                <Button className='bg-[#05DC75] w-[149px] text-black rounded-none hover:bg-green-700'>Book a meet <span>&rarr;</span></Button>
            </div>
            <div> 
                <img src="/servicehero.png" alt="" />
            </div>
        </div>
      
    </>
  )
}
