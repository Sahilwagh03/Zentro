import React from 'react'
import Button from '../button'
import ServiceList from '../serviceList'

type Props = {}

function OurServices({ }: Props) {
    return (
        <section className='relative font-oswald bg-black pb-10 md:pb-20'>
            <div className='flex flex-col md:flex-row items-center justify-between text-center gap-4 px-4 md:px-8 '>
                <div className='text-center md:text-left text-4xl md:text-6xl'>
                    <h3 className='text-white'>Our Services - <span className='text-primary'>Tailored for</span></h3>
                    <span className='text-primary'>Growth</span>
                </div>
                <Button className='bg-primary font-normal'>
                    Book a consultation
                </Button>
            </div>
            <ServiceList/>
        </section>
    )
}

export default OurServices