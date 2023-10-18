'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import HeroTitle from '@/components/common/heroTitle'
import Button from '@/components/common/button'

import portadaImage from '../../../public/images/portada-novaterra.jpg'

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
      <div className='flex flex-col justify-center w-full h-screen bg-gradient-to-b from-[rgba(3,19,51,.7)] to-transparent'>
        <div className='flex flex-col flex-nowrap h-fit w-full p-3.5 md:p-8 lg-12 xl:p-24 md:w-[65%] xl:w-[65%] 2xl:w-[60%] min-[1700px]:w-[40%]'>
          <HeroTitle content='Invertí en Novaterra III, invertí para toda la vida' />
          <p className='text-white mt-5 lg:w-3/4'>La propuesta para vivir más seductora e innovadora de Barrio Guemes. Si te gusta Güemes, Novaterra III es tu oportunidad ideal para disfrutar de todo lo que te gusta, en un solo lugar..</p>
          <div className='flex flex-row mt-10 w-full space-x-5'>
            <Link href='#contacto'>
              <Button content='Contactanos' />
            </Link>
            <Link href='#depto-modelo'>
              <Button transparent content='Conoce más' icon={<path d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3' strokeLinecap='round' strokeLinejoin='round' />} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
