import React from 'react'
import BentogridResult from '../bentogridResult'

type Props = {}

const OurResults = (props: Props) => {
  return (
    <section className='relative font-oswald bg-black px-4 md:px-20 py-10 md:py-20'>
      <div className='flex flex-col md:flex-row items-center justify-between text-center gap-4 px-4 md:px-8 '>
        <div className='text-center md:text-left text-4xl md:text-6xl'>
          <h3 className='text-white'>Our Results - <span className='text-primary'>Speak for</span></h3>
          <span className='text-primary'>Themselves</span>
        </div>
      </div>
      <div className='pt-12 md:pt-24'>
        <BentogridResult />
      </div>
    </section>
  )
}

export default OurResults