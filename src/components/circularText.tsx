'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

type Props = {}

const CircularText = (props: Props) => {
  const textRef = useRef<HTMLDivElement>(null)
  const circleText = "Scroll Down For More • Scroll Down For More •"
  const letters = circleText.split('')
  const angleIncrement = 360 / letters.length

  useEffect(() => {
    if (!textRef.current) return
    // Animate each letter around the circle
    gsap.to(textRef.current.children, {
      rotation: "+=360",
      repeat: -1,
      duration: 10,
      ease: 'linear',
      // Adjust origin to match smaller radius
      transformOrigin: '0 -40px'
    })
  }, [])

  return (
    <div className="flex py-10">
      <div ref={textRef} className="relative w-24 h-24">
        {letters.map((char, index) => {
          const angle = index * angleIncrement
          return (
            <span
              key={index}
              className="absolute top-1/2 left-1/2 rotate-text"
              style={{ transform: `rotate(${angle}deg)` }}
            >
              {char}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default CircularText