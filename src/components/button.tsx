'use client'
import { cn } from '@/utils/cn'
import React, { ReactNode } from 'react'


type Props = {
    children: ReactNode
    className?: string
}

function Button({ children, className }: Props) {
    return (
        <button className={cn("relative inline-flex items-center border text-black font-medium px-6 py-2 rounded-full group overflow-visible", className)}>
            {children}
        </button>
    )
}

export default Button
