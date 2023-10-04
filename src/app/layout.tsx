import React from 'react'
import './globals.css'
import localFont from 'next/font/local'

import Header from '@/components/presentational/header'
import Footer from '@/components/presentational/footer'

import type { Metadata } from 'next'

const pangram = localFont({
  src: [
    {
      path: './fonts/PPPangramSans-Light.otf',
      weight: '200',
      style: 'normal'
    },
    {
      path: './fonts/PPPangramSans-Medium.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/PPPangramSans-Bold.otf',
      weight: '800',
      style: 'normal'
    }
  ],
  variable: '--font-pangram-sans'
})

export const metadata: Metadata = {
  title: 'Dycsa - Novaterra III',
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link href='/apple-touch-icon.png' rel='apple-touch-icon' sizes='180x180' />
        <link href='/favicon-32x32.png' rel='icon' sizes='32x32' type='image/png' />
        <link href='/favicon-16x16.png' rel='icon' sizes='16x16' type='image/png' />
        <link href='/site.webmanifest' rel='manifest' />
      </head>
      <body className={`${pangram.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
