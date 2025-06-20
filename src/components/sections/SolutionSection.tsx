import React from 'react'
import Button from '../button'
import Image from 'next/image'
import ProblemList from '../problemList'
import { FiArrowUpRight } from 'react-icons/fi'
type Props = {}

const SolutionsSection = (props: Props) => {
  return (
    <section className='relative px-4 py-10 md:px-8 md:py-20 font-oswald max-w-7xl mx-auto'>
      <div className='flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-0'>
        <div className='text-center md:text-left'>
          <h2 className='text-4xl md:text-6xl'>
            Your Problem,
          </h2>
          <h2 className='text-4xl md:text-6xl font-semibold'>
            Solved
          </h2>
        </div>
        <div className='max-w-md text-center md:text-left'>
          <p className='mb-6 text-base md:text-lg font-normal'>
            We help you rise above these challenges with proven strategies tailored to deliver measurable results.
          </p>
          <div className='flex justify-center md:justify-start items-center gap-1 relative'>
            <Button>
              More About
            </Button>
            <FiArrowUpRight size={44} />
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-start md:items-center py-6 gap-6 md:gap-4'>
        <ProblemList />
        <div className='w-full md:w-[40rem] h-auto'>
          <Image
            src="/images/card_image.png"
            alt="Card image"
            width={640}   // Using 640 width for better resolution on mobile
            height={853}  // Maintain aspect ratio
            className='w-full h-auto object-contain'
          />
        </div>
      </div>
    </section>
  )
}

export default SolutionsSection
