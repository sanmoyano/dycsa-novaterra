'use client'
import React from 'react'

import HeroTitle from '@/components/common/title'
import Button from '@/components/common/button'

const HeroSection = () => {
  return (
    <div className='bg-hero-section bg-cover bg-no-repeat bg-center bg-fixed w-full h-screen flex items-center justify-start'>
      <div className='flex flex-col justify-center w-full h-full bg-gradient-to-b from-[rgba(0,0,0,.5)] to-transparent'>
        <div className='flex flex-col flex-nowrap h-fit pl-3.5 md:pl-6 lg:pl-12 w-[80%] md:w-[70%] lg:w-[50%]'>
          <HeroTitle content='Acá arriba, la vista es' span=' mejor' />
          <div className='flex flex-row mt-10 space-x-2'>
            <Button content='Contactanos' onClick={() => console.log('contacto')} />
            <Button transparent content='Conoce más' icon=' →' onClick={() => console.log('mas')} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
