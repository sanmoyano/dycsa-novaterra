'use client'

import React from 'react'
import Image from 'next/image'

import HeroTitle from '@/components/common/heroTitle'
import Button from '@/components/common/button'

import portadaImage from '../../../public/images/portada-casa-grande.jpg'

const HeroSection: React.FC = () => {
  return (
    <>
      <div className='-z-10 fixed w-screen h-screen'>
        <Image
          fill
          priority
          alt='Dycsa - Gran balcon de departamento en Casa Grande Laplace, con vista al estadio Mario Alberto Kempes'
          className='object-cover object-center'
          placeholder='blur'
          quality={100}
          src={portadaImage}
        />
      </div>
      <div className='flex flex-col justify-center w-full h-screen bg-gradient-to-b from-[rgba(0,0,0,.5)] to-transparent'>
        <div className='flex flex-col flex-nowrap h-fit w-full p-3.5 md:p-8 lg-12 xl:p-24 md:w-[60%] xl:w-[70%] 2xl:w-[50%] min-[1700px]:w-[40%]'>
          <HeroTitle content='Acá arriba, la vista es' span=' mejor.' />
          <div className='flex flex-row mt-10 w-full space-x-5'>
            <Button content='Contactanos' onClick={() => console.log('contacto')} />
            <Button transparent content='Conoce más' icon={<path d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3' strokeLinecap='round' strokeLinejoin='round' />} onClick={() => console.log('mas')} />
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
