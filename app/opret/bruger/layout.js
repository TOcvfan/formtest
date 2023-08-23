'use client'
import { Inter } from 'next/font/google'
import { StateMachineProvider } from "little-state-machine";
import { OpretData } from '$/OpretData';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Christians test opret',
  description: 'test',
}

export default function OpretLayout({ children }) {
  return (


    <OpretData>
      {children}
    </OpretData>


  )
}
