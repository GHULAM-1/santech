import TextCard from '../ui/textCards'
import { contactCardData } from '@/data/contactCards'

import React from 'react'

export default function ConatctCards() {
  return (
    <>
    
      <div className="flex lg:flex-row xl:justify-center lg:justify-end justify-center flex-col-reverse md:flex-col gap-[20px] items-center lg:gap-[3px] ">
       <div className='grid grid-cols-1 md:grid-cols-2 justify-items-end xl:justify-items-center gap-[20px] '> 
      {contactCardData.map((card, index) => (
        <TextCard
          key={index}
          title={card.title}
          description={card.description}
          socialIcons={card.socialIcons}
        />
      ))}
      </div>
      <div className='flex '>
    <img className='w-[272px] rounded-[8px] md:w-full xl:w-full lg:w-full h-[444px] object-cover lg:p-[24px]' src="/about/overlap.png" alt="" />
    </div>
    </div>
    

    </>
  )
}
