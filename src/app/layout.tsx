import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { ReactNode } from 'react'

const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata = {
  title: 'Landing Page',
  description: '',
}

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={jakartaSans.className}>{children}</body>
    </html>
  )
}
