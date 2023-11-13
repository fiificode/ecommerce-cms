import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {Ubuntu} from "next/font/google"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const ubuntu = Ubuntu({ subsets: ['latin'],weight:["300","400","500","700"]})


export const metadata: Metadata = {
  title: 'ECommerce-CMS',
  description: 'Admin Dashboard for ECommerce CMS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
       className={ubuntu.className}>{children}
      </body>
    </html>
  )
}
