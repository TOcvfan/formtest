'use client'
import './globals.css';
import { Inter } from 'next/font/google';
import { AppProvider } from './AppContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Christians test side',
  description: 'test',
}

export default function BrugerLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  )
}
