import Image from 'next/image'
import React from 'react'

type Props = {}

const WhyChoose = (props: Props) => {
  return (
    <section className="bg-black px-4 md:px-20 py-10 md:py-20">
      <div>
        <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold font-oswald">
          <div className="flex items-center flex-wrap gap-2 md:gap-4">
            <span>“Let’s Make</span>
            <span className='flex items-center'>
              <Image
                src="/images/Thender.svg"
                alt="Thender"
                width={80}
                height={80}
                className="w-8 h-8 md:w-16 md:h-16 rounded-full bg-primary object-contain"
              />
            </span>
            <span>Your Business</span>
            <span>Unmissable—</span>
            <span>
              <Image
                src="/images/text-image.jpg"
                alt="text-image"
                width={80}
                height={80}
                className="w-10 h-10 md:w-40 md:h-16 rounded-full object-contain"
              />
            </span>
            <span>Schedule</span>
            <span>Your</span>
            <span className='text-[#8a8a8a] font-normal'>Free SEO and Google Ads</span>
            <span className='text-[#8a8a8a] font-normal'>Consultation Today.</span>
            <span>”</span>
          </div>
        </h1>
      </div>
    </section>
  )
}

export default WhyChoose
