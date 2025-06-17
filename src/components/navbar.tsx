'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import React from 'react'
import { PiDotsNine } from 'react-icons/pi'

type Props = {}

const Navbar = (props: Props) => {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Solution' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/faq', label: 'FAQ' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-8 md:px-12 py-4 transition-all duration-300 ${scrolled ? 'bg-white/20 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
    >
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-baseline space-x-1.5 md:hidden">
          <Image
            src="/images/Thender.svg"
            alt="Logo"
            width={0}
            height={0}
            className="h-[8vw] min-h-[1.5rem] max-h-[2.5rem] w-auto"
            priority
          />
        </Link>

        {/* Desktop: show links */}
        <ul className="hidden md:flex space-x-7 text-sm font-medium ">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`transition-colors duration-200 ${pathname === href
                    ? 'text-black'
                    : 'text-black/50 hover:text-black/70'
                  }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* → Right side */}
        <div className="flex items-center space-x-4">
          {/* Desktop: show Contact button */}
          <button className="hidden md:block p-1 px-3 text-sm bg-white/60 rounded-full">
            <Link href="/login">Contact Us</Link>
          </button>

          {/* Always show the dots icon */}
          <PiDotsNine className="text-black/50" size={28} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
