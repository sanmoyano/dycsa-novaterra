'use client'
import React from 'react'
import Image from 'next/image'

import HeroTitle from '@/components/common/title'
import Button from '@/components/common/button'

const HeroSection: React.FC = () => {
  return (
    <>
      <div className='-z-10 fixed w-screen h-screen'>
        <Image
          priority
          alt='casa grnade'
          blurDataURL='/images/portada-blur-casa-grande.jpg'
          layout='fill'
          objectFit='cover'
          placeholder='blur'
          quality={100}
          src='/images/portada-casa-grande.jpg'
        />
      </div>
      <div className='flex flex-col justify-center w-screen h-screen bg-gradient-to-b from-[rgba(0,0,0,.5)] to-transparent'>
        <div className='flex flex-col flex-nowrap h-fit pl-3.5 md:pl-6 lg:pl-12 w-[80%] md:w-[70%] lg:w-[45%]'>
          <HeroTitle content='Acá arriba, la vista es' span=' mejor.' />
          <div className='flex flex-row mt-10 space-x-2'>
            <Button content='Contactanos' onClick={() => console.log('contacto')} />
            <Button transparent content='Conoce más' icon=' →' onClick={() => console.log('mas')} />
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
