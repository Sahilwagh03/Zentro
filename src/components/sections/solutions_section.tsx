import React from 'react'
import Button from '../button'

type Props = {}

const SolutionsSection = (props: Props) => {
  return (
    <div className='relative md:px-8 md:py-20 font-oswald'>
        <div className='flex items-center justify-between'>
          <div className='font-oswald text-6xl'>
            <h2>Your Problem,</h2>
            <h2 className='font-semibold'>Solved</h2>
          </div>
          <div className='max-w-3xs flex flex-col gap-4'>
            <p className='font-normal'>
              We help you rise above these challenges with proven strategies tailored to deliver measurable results.
            </p>
            <Button />
          </div>
        </div>
    </div>
  )
}

export default SolutionsSection