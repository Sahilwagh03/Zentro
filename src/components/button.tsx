'use client'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

type Props = {}

function Button({ }: Props) {
    return (
        <div className='flex justify-center md:justify-start items-center gap-1 relative'>
            <button className="relative inline-flex items-center border text-black font-medium px-6 py-2 rounded-full group overflow-visible">
                More About
            </button>
            <FiArrowUpRight size={44} />
        </div>
    )
}

export default Button
