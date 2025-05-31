import Image from 'next/image'
import React from 'react'
import CircularText from './circularText'
import Carousel from './carousel'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className="relative w-full h-auto bg-primary z-10 pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 ">

        <div className="relative flex justify-center items-center h-auto md:pl-4">
          <Image
            src="/images/poster.png"
            alt="Hero Image"
            width={500}
            height={500}
            className="relative z-10 w-full lg:w-[22rem] h-auto object-cover rounded-md"
          />
        </div>


        {/* Top Right */}
        <div className="relative flex flex-col justify-between h-auto px-4 md:pr-4">
          <div>
            <div className='mt-4 md:mt-8'>
              <h2 className='text-3xl font-light  text-secondary w-full md:w-[25rem] text-oswald'>
                Stop Being Invisible Online —
                <span className='font-semibold text-black italic text-oswald'> Make Your Business the First Choice on Google</span>
              </h2>
            </div>
            <CircularText />
          </div>
          <div className='hidden md:flex justify-end  items-end'>
            <div className='w-[20rem]'>
              <h2 className='inline-block text-sm font-medium py-1 border-b-2 border-b-black/20'>
                Lets Get Started
              </h2>
              <p className='text-sm mt-2 font-light text-secondary w-[15rem] font-oswald'>
                Web Design, SEO, and Google Ads Services to Maximise Your Growth
              </p>
            </div>
          </div>
          <div className='hidden md:flex absolute right-[1.5vw] rotate-[270deg] top-[10vw]'>
            <div className="text-oswald flex flex-col items-start font-semibold text-[0.7rem] text-black/20 ">
              <span>2025</span>
              <span>Our Work</span>
            </div>
          </div>
        </div>

        <div className="mt-4 md:mt-0 flex items-baseline h-auto]">
          <Image
            src="/images/Thender.svg"
            alt="Logo"
            width={0}
            height={0}
            className="h-[15.4vw] w-auto"
            priority
          />

          {/* Text */}
          <h1 className="flex items-baseline font-black text-[22.5vw] leading-none text-black">
            ZENTRO
            <div className="w-[5vw] h-[5vw] bg-black" />
          </h1>
        </div>
      </div>
      <Carousel/>
    </div>
  )
}

export default Hero
