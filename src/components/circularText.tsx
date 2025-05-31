'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Image from 'next/image'

const CircularText = () => {
  const circleRef = useRef<HTMLDivElement>(null)
  const circleText = "Scroll Down For More • Scroll Down For More • "
  const letters = circleText.split('')
  const angleIncrement = 360 / letters.length

  useEffect(() => {
    if (!circleRef.current) return

    gsap.to(circleRef.current, {
      rotation: "+=360",
      repeat: -1,
      duration: 20,
      ease: "linear",
    })
  }, [])

  return (
    <div className="hidden md:flex py-[1vw]">
      <div className="relative w-[8vw] h-[8vw]">
        {/* Rotating circular text */}
        <div ref={circleRef} className="absolute top-0 left-0 w-full h-full">
          {letters.map((char, index) => {
            const angle = index * angleIncrement
            return (
              <span
                key={index}
                className="absolute font-medium text-black/30 leading-none"
                style={{
                  top: '50%',
                  left: '50%',
                  fontSize: '0.7vw',
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-3.2vw)`,
                  letterSpacing: '0.05em',
                  whiteSpace: 'pre',
                }}
              >
                {char}
              </span>
            )
          })}
        </div>

        {/* Stationary arrow */}
        <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full z-10">
          <Image
            src="/images/arrow.svg"
            alt="Arrow"
            width={0}
            height={0}
            className="w-[2vw] h-[2vw]"
          />
        </div>
      </div>
    </div>
  )
}

export default CircularText
