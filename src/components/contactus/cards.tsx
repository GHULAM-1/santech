import TextCard from '../ui/textCards'
import { contactCardData } from '@/data/contactCards'

import React from 'react'

export default function ConatctCards() {
  return (
    <>
    <div className='flex flex-col lg:flex-row justify-between px-[20px] py-[9px] lg:px-[80px] items-center lg:py-[40px]'>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-stretch gap-9 lg:gap-6 p-8">
      {contactCardData.map((card, index) => (
        <TextCard
          key={index}
          title={card.title}
          description={card.description}
          bgColor={card.bgColor}
          socialIcons={card.socialIcons}
        />
      ))}
    </div>

    <img className='w-full h-full lg:w-[45%] lg:h-[400px]' src="/about/overlap.png" alt="" />
    </div>
    </>
  )
}
