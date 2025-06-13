import { ServicesConstant } from '@/constant/HomeConstant'
import { cn } from '@/utils/cn'
import React from 'react'

type Props = {}


const ServiceList = (props: Props) => {
    return (
        <div className='pt-10'>
            {ServicesConstant.map(({title}, index) => (
                <ServiceItem key={index} title={title} number={`0${index+1}.`} />
            ))}
        </div>
    )
}

const ServiceItem = ({ title , number}: { title: string , number:string}) => {
    return (
        <div className={cn("border-t-2 border-[#424242] flex items-center gap-8 md:gap-20 min-h-auto lg:min-h-32 text-white hover:text-black hover:bg-primary p-4", number === "03." && "border-b-2")}>
            <h2 className='text-lg md:text-2xl font-oswald font-light'>{number}</h2>
            <h3 className="text-3xl md:text-6xl uppercase font-oswald font-light">{title}</h3>
        </div>
    )
}

export default ServiceList