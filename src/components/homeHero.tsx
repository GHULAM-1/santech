import Hero from "./hero";
import React from 'react'

export default function HomeHero() {
  return (
    <>
    <div className="w-full">
    <Hero backgroundImage="/Hero.png" heading="Transforming Businesses with Cutting-Edge Tech Solutions."
    description="From app development to automation and digital growth strategies, Santech delivers innovative technology services to drive your business forward."
    showButton={true} 
     showClients={true}
    
    />
    </div>
      
    </>
  )
}
