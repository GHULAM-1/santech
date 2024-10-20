import TextCard from '../ui/textCards'
import { contactCardData } from '@/data/contactCards'

import React from 'react'

export default function ConatctCards() {
  return (
    <>
    <div className='flex flex-col lg:flex-row  px-[20px] py-[9px]  items-center lg:gap-[20px]'>
      <div className="grid grid-cols-1 p-[24px] md:grid-cols-2 justify-items-center gap-[20px]">
      {contactCardData.map((card, index) => (
        <TextCard
          key={index}
          title={card.title}
          description={card.description}
          socialIcons={card.socialIcons}
        />
      ))}
    </div>

    <img className='w-full h-full lg:w-[630px] lg:h-[444px] p-[24px]' src="/about/overlap.png" alt="" />
    </div>
    </>
  )
}
