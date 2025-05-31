'use client'
import React from 'react'

const items = [
  'SEO',
  'CREATIVE DESIGN',
  'UI/UX',
  'WEBSITE DESIGN',
  'MARKETING',
]

const Carousel = () => {
  const repeatedItems = [...items, ...items, ...items, ...items]

  return (
    <div className="overflow-hidden whitespace-nowrap py-4 pt-2">
      <div className="animate-carousel inline-flex items-center">
        {repeatedItems.map((text, index) => (
          <React.Fragment key={index}>
            <span className="inline-flex items-center text-black font-oswald font-medium text-lg mx-4">
              {text}
            </span>
            <span className="text-2xl text-black/30 leading-none mx-4">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Carousel
