import React from 'react'
import Button from '../button'
import Image from 'next/image'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className="font-oswald bg-[#D1FF00] text-black pb-10">
            <div className='p-6 py-10'>
                <h2 className='text-4xl text-center md:text-[3.92rem] font-bold'>NOT Ready Yet? Get Started With Our Free Guide</h2>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 ">
                {/* Newsletter Section */}
                <div className="md:col-span-2 space-y-4 flex flex-col items-center md:items-start">
                    <div className='space-y-4 w-fit'>
                        <p className="font-semibold text-3xl">Be the first to hear <br></br> about Pika updates</p>
                        <Button className='bg-black text-sm w-full justify-center text-white font-light font-sans border-2 border-black'>
                            Get Our Newsletter
                        </Button>
                    </div>
                </div>

                {/* Company Links */}
                <div className='hidden md:flex md:flex-col'>
                    <h4 className="font-semibold text-sm mb-4 text-black/30">Company</h4>
                    <ul className="space-y-2 text-lg">
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Service</a></li>
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                        <li><a href="#" className="hover:underline">Pricing</a></li>
                    </ul>
                </div>

                {/* Connect Links */}
                <div className='hidden md:flex md:flex-col'>
                    <h4 className="font-semibold text-sm mb-4 text-black/30">Connect</h4>
                    <ul className="space-y-2 text-lg">
                        <li><a href="#" className="hover:underline">Discord</a></li>
                        <li><a href="#" className="hover:underline">Instagram</a></li>
                        <li><a href="#" className="hover:underline">X</a></li>
                        <li><a href="#" className="hover:underline">LinkedIn</a></li>
                        <li><a href="#" className="hover:underline">TikTok</a></li>
                    </ul>
                </div>
            </div>

            {/* Logo */}
            <div className="font-base mt-4 md:mt-0 flex items-baseline h-auto">
                <Image
                    src="/images/Thender.svg"
                    alt="Logo"
                    width={0}
                    height={0}
                    className="h-[15.4vw] w-auto"
                    priority
                />

                {/* Text */}
                <h1 className="flex items-baseline font-black text-[22.5vw] leading-none text-black">
                    ZENTRO
                    <div className="w-[5vw] h-[5vw] bg-black" />
                </h1>
            </div>

            {/* Bottom Links */}
            <div className="text-sm text-gray-700 mt-0 border-t border-black pt-4 mx-6">
                {/* Mobile layout */}
                <div className="flex flex-col items-center gap-y-2 md:hidden">
                    <div className="flex gap-x-4">
                        <span>Terms of Service</span>
                        <span>Acceptable Use Policy</span>
                    </div>
                    <div className="flex gap-x-4">
                        <span>Pika © 2024. All rights reserved.</span>
                        <span>Privacy Policy</span>
                    </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:flex justify-between items-center">
                    <span>Terms of Service</span>
                    <span>Acceptable Use Policy</span>
                    <span>Pika © 2024. All rights reserved.</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
