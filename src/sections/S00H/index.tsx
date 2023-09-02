'use client'

import React from 'react'
import Image from 'next/image'

import HeroTitle from '@/components/common/title'
import Button from '@/components/common/button'

import portadaImage from '../../../public/images/portada-casa-grande.jpg'

const HeroSection: React.FC = () => {
  return (
    <>
      <div className='-z-10 fixed w-screen h-screen'>
        <Image
          priority
          alt='depto-balcon-portada-casa-grande-laplace'
          layout='fill'
          objectFit='cover'
          placeholder='blur'
          quality={100}
          src={portadaImage}
        />
      </div>
      <div className='flex flex-col justify-center w-full h-screen bg-gradient-to-b from-[rgba(0,0,0,.5)] to-transparent'>
        <div className='flex flex-col flex-nowrap h-fit px-3.5 md:px-6 lg:pl-12 w-full md:w-[70%] lg:w-[50%]'>
          <HeroTitle content='Acá arriba, la vista es' span=' mejor.' />
          <div className='flex flex-row mt-10 w-full space-x-5'>
            <Button content='Contactanos' onClick={() => console.log('contacto')} />
            <Button transparent content='Conoce más' icon=' →' onClick={() => console.log('mas')} />
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
