import Navbar from '@/components/navbar'
import './globals.css'
import { Libre_Franklin } from 'next/font/google'
import type { ReactNode } from 'react'

const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  variable: '--font-libre-franklin',
  display: 'swap',
})

export const metadata = {
  title: 'Zentro',
  description: 'Zentro is a modern, open-source, and privacy-focused web search engine.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={libreFranklin.variable}>
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
