
import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar/Navbar';
import {Footer} from "@/components/Footer/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hummab Rabia || Cyber Security Expert',
  description: `Hi I'm Hummab, I love everything cyber security related. It's my passion and love that drives my motivation to protect and secure business against all the bad odds.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
