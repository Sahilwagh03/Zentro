import Navbar from '@/components/navbar'
import './globals.css'
import type { ReactNode } from 'react'

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
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
