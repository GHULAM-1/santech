import TextCard from '../ui/textCards'
import { contactCardData } from '@/data/contactCards'

import React from 'react'

export default function ConatctCards() {
  return (
    <>
    <div className='flex justify-between px-[80px] items-center py-[40px]'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
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

    <img className='w-[45%] h-[400px]' src="/about/overlap.png" alt="" />
    </div>
    </>
  )
}
