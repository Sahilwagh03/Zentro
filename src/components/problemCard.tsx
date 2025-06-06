import Image from 'next/image'
import React from 'react'

type Props = {
  title: string
  description: string
}

function ProblemCard({ title, description }: Props) {
  return (
    <div className='flex flex-col gap-1 p-6 max-w-sm shadow-xs rounded-lg bg-white border border-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out'>
      <div className='flex items-center gap-2'>
        <Image
          src="/images/solutionicon.svg"
          alt="Solution Icon"
          width={16}
          height={16}
          className='w-4 h-auto'
        />
        <h3 className='text-lg font-medium'>{title}</h3>
      </div>

      <p className='text-sm text-black/50 font-normal pl-[22px]'>
        {description}
      </p>
    </div>
  )
}

export default ProblemCard
