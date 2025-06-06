import React from 'react'

type Props = {}

const cards = [
  {
    title: (
      <>
        Be Seen by the <br />
        Right <span className="bg-white text-black px-1">Audience</span>
      </>
    ),
    description: 'Rank higher on Google and get discovered by customers actively searching for your services.',
    bg: 'bg-black',
    text: 'text-white',
    image: '/images/audience.png', // 👈 replace with actual image paths
    shapeColor: 'bg-lime-400'
  },
  {
    title: (
      <>
        Turn Traffic into <br />
        <span className="bg-white text-black px-1">Revenue</span>
      </>
    ),
    description: 'Our website will become a conversion machine, driving leads and sales 24/7.',
    bg: 'bg-[#6c4cff]',
    text: 'text-white',
    image: '/images/revenue.png',
    shapeColor: 'bg-lime-400'
  },
  {
    title: (
      <>
        Scale Without <br />
        <span className="bg-white text-black px-1">Breaking the Bank</span>
      </>
    ),
    description: 'Whether you’re a local business or targeting a global market, we’ll help you grow sustainably.',
    bg: 'bg-[#a42fff]',
    text: 'text-white',
    image: '/images/scale.png',
    shapeColor: 'bg-lime-400'
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
          <div key={index} className={`${card.bg} ${card.text} rounded-3xl p-6 flex flex-col justify-between h-[35rem]`}>
            <div>
              <div className='relative min-h-36'>
                <h4 className='absolute text-2xl md:text-3xl font-bold  leading-tight'>{card.title}</h4>
              </div>
              <div className='flex justify-center items-center'>
                <p className='text-lg max-w-60 text-center opacity-90'>{card.description}</p>
              </div>
            </div>
            <div className='mt-8 relative'>
              <div className={`${card.shapeColor} w-full h-32 absolute top-0 left-0 -z-10 rounded-t-3xl skew-y-3`}></div>
              <img src={card.image} alt='card visual' className='w-full h-32 object-contain mx-auto' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurPromise
