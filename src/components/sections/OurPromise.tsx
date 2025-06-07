import Image from 'next/image'
import { title } from 'process'
import React from 'react'

type Props = {}

const cards = [
  {
    title: (
      <span>
        Be Seen by the <br />
        Right <span className="bg-white text-black px-1">Audience</span>
      </span>
    ),
    description: 'Rank higher on Google and get discovered by customers actively searching for your services.',
    bg: 'bg-black',
    text: 'text-white',
    image: '/images/Promise_1.jpg', // 👈 replace with actual image paths
    titleStyle:'rotate-[-10deg] left-[15%]'
  },
  {
    title: (
      <span className='text-white'>
        Turn Traffic into <br />
        <span className="bg-black px-1">Revenue</span>
      </span>
    ),
    description: 'Our website will become a conversion machine, driving leads and sales 24/7.',
    bg: 'bg-[#5b3ef2]',
    text: 'text-white',
    image: '/images/Promise_2.jpg',
    titleStyle:'rotate-[5deg] left-[15%] top-[10%] text-center'
  },
  {
    title: (
      <span className='text-white'>
        Scale Without <br />
        <span className="bg-black px-1">Breaking</span>
        the Bank
      </span>
    ),
    description: 'Whether you’re a local business or targeting a global market, we’ll help you grow sustainably.',
    bg: 'bg-[#9d00ff]',
    text: 'text-white',
    image: '/images/Promise_3.jpg',
    titleStyle:'rotate-[-10deg] left-[15%]'
  }
]

const OurPromise = (props: Props) => {
  return (
    <div className='relative font-oswald px-4 pb-10 md:px-8 md:pb-20'>
      <h3 className='flex items-center justify-center text-center gap-2 md:gap-4 mb-10'>
        <span className='text-4xl md:text-6xl font-semibold'>Our Promise</span>
        <span className='text-4xl md:text-6xl'>to You</span>
      </h3>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-0.5'>
        {cards.map((card, index) => (
          <div key={index} className={`${card.bg} ${card.text} rounded-3xl p-6 flex flex-col gap-2 justify-between h-[35rem]`}>
            <div>
              <div className='relative min-h-32'>
                <h4 className={`absolute text-2xl md:text-4xl font-bold  leading-tight ${card.titleStyle}`}>{card.title}</h4>
              </div>
              <div className='flex justify-center items-center'>
                <p className='text-lg max-w-60 text-center opacity-90'>{card.description}</p>
              </div>
            </div>
            <div className='relative'>
              <Image width={242} height={260} src={card.image} alt='card visual' className='w-full h-[19.7rem] object-contain mx-auto' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurPromise
