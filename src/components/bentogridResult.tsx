import Image from 'next/image'
import React from 'react'
import { FaPercent } from "react-icons/fa";
type Props = {}

const BentogridResult = (props: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 lg:grid-rows-6 gap-4 bg-black text-white min-h-screen">

            {/* Column 1 — Traffic Growth */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-3 lg:col-start-1 lg:row-start-1 bg-neutral-900 rounded-xl p-4 md:p-6 flex flex-col justify-between text-left">
                <h3 className="text-lg font-sans text-white/70">Organic Traffic Growth</h3>
                <div>
                    <div className='flex items-center'>
                        <h2 className="text-white text-5xl font-bold">278</h2>
                        <FaPercent className='text-4xl fill-primary' />
                    </div>
                    <p className="text-xs md:text-sm font-light text-white/80 mt-4">
                        An ecommerce retailer achieved record-breaking sales with targeted SEO and improved site performance.
                    </p>
                </div>
            </div>

            {/* Column 1 — PPC Boost */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-3 lg:col-start-1 lg:row-start-4 bg-neutral-900 rounded-xl p-4 md:p-6 flex flex-col justify-between text-left">
                <h3 className="text-lg font-sans text-white/70">Revenue Boost Through PPC</h3>
                <div>
                    <div className='flex items-center'>
                        <h2 className="text-white text-5xl font-bold">414</h2>
                        <FaPercent className='text-4xl fill-primary' />
                    </div>
                    <p className="text-xs md:text-sm font-light text-white/80 mt-4">
                        A service-based business quadrupled revenue with data-driven Google Ads campaigns.
                    </p>
                </div>
            </div>

            {/* Column 2 — More Leads */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-3 lg:col-start-3 lg:row-start-1 bg-neutral-900 rounded-xl p-4 md:p-6 flex flex-col justify-between text-left">
                <h3 className="text-lg font-sans text-white/70">More Leads in 3 Months</h3>
                <div>
                    <div className='flex items-center'>
                        <h2 className="text-white text-5xl font-bold">70</h2>
                        <FaPercent className='text-4xl fill-primary' />
                    </div>
                    <p className="text-xs md:text-sm font-light text-white/80 mt-4">
                        A case study reveals a significant increase in leads after launching a high-performing website designed to convert.
                    </p>
                </div>
            </div>

            {/* Column 2 — Discussion Image */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-3 lg:col-start-3 lg:row-start-4 text-black rounded-xl">
                <Image
                    src="/images/discussion.jpg"
                    alt="Discussion"
                    width={500}
                    height={300}
                    className="w-full h-full rounded-lg object-cover filter grayscale"
                />
            </div>


            {/* Column 3 — Hero Section */}
            <div className="border-[#424242] border-2 col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-6 lg:col-start-5 lg:row-start-1 rounded-xl relative">
                <Image
                    src="/images/bentogird-result-main-image.jpg"
                    alt="result-main-image"
                    width={500}
                    height={500}
                    className="w-full h-full rounded-xl object-cover filter grayscale"
                />
            </div>
        </div>
    )
}

export default BentogridResult
