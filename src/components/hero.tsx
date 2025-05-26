import Image from 'next/image'
import React from 'react'
import CircularText from './circularText'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className="relative w-full min-h-svh h-auto bg-primary z-10 pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 ">

        <div className="relative flex justify-center items-center h-auto pl-4">
          <div className="absolute top-[-10px] left-[-10px] w-[380px] h-[380px] rounded-md bg-black/5 blur-md z-0" />
          <div className="absolute bottom-[-10px] right-[-10px] w-[380px] h-[380px] rounded-md bg-black/5 blur-md z-0" />
          <div className="absolute inset-0 w-[380px] h-[380px] rounded-md bg-black/5 blur-lg z-0" />
          <Image
            src="/images/poster.png"
            alt="Hero Image"
            width={500}
            height={500}
            className="relative z-10 w-[22rem] h-auto object-cover rounded-md"
          />
        </div>


        {/* Top Right */}
        <div className="flex flex-col justify-between h-auto pr-4">
          <div>
            <div className='mt-8'>
              <h2 className='text-2xl font-light tracking-tight text-secondary w-[25rem] text-oswald'>
                Stop Being Invisible Online —
                <span className='font-semibold text-black italic text-oswald'> Make Your Business the First Choice on Google</span>
              </h2>
            </div>
            <CircularText />
          </div>
          <div className='flex justify-end tracking-tight items-end'>
            <div className='w-[20rem]'>
              <h2 className='inline-block text-sm font-medium py-1 border-b-2 border-b-black/20'>
                Lets Get Started
              </h2>
              <p className='text-sm mt-4 font-light text-secondary w-[12rem] font-oswald'>
                Web Design, SEO, and Google Ads Services to Maximise Your Growth
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-baseline h-auto]">
          <Image
            src="/images/Thender.svg"
            alt="Logo"
            width={0}
            height={0}
            className="h-[15vw] w-auto"
            priority
          />

          {/* Text */}
          <h1 className="flex items-baseline font-black text-[21vw] leading-none text-black">
            ZENTRO
            <div className="w-[5vw] h-[5vw] bg-black" />
          </h1>
        </div>


      </div>
    </div>
  )
}

export default Hero
