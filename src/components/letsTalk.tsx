import React from 'react'

export default function LetsTalk() {
  return (
    <div>
        <div
      className="relative flex items-center justify-between px-[80px] py-[30px] bg-white"
      style={{
        backgroundImage: 'url("/CTA.png")',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
    >
      {/* Left Text Section */}
      <div className="space-y-4">
        <h2 className="text-[36px] font-semibold text-[#16339C]">
          Ready to Transform Your Business?
        </h2>
        <button className="flex items-center text-[36px] font-medium text-black hover:underline">
          Let’s Talk <span className="ml-2">→</span>
        </button>
      </div>
    </div>
    </div>
  )
}
