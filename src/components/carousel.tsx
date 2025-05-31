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
  const repeatedItems = [...items, ...items , ...items] // Double for infinite effect

  return (
    <div className="overflow-hidden whitespace-nowrap py-4">
      <div className="animate-carousel inline-block">
        {repeatedItems.map((text, index) => (
          <span
            key={index}
            className="inline-block text-black text-xl font-semibold mx-4"
          >
            {text} <span className="text-black/30 ml-4">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Carousel
