import Hero from "./hero";
import React from 'react'

export default function HomeHero() {
  return (
    <>
    <div className="w-full">
    <Hero backgroundImage="/Hero.png" heading="Transforming Businesses with Cutting-Edge Tech Solutions."
    description="Delivering customized tech solutions in app/web development, automation, digital growth, and real estate."
    showButton={true} 
     showClients={true}
    
    />
    </div>
      
    </>
  )
}
