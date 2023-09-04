'use client'

import React from 'react'
import Image from 'next/image'

import Button from '@/components/common/button'

import torreSuquiaImg from '../../../../public/images/torre-suquia-casa-grande.jpg'
import torreLaplaceImg from '../../../../public/images/torre-laplace-casa-grande.jpg'

const TowerCard: React.FC = () => {
  return (
    <div className='h-[400px] lg:h-[600px] overflow-hidden aspect-[4/5] flex flex-col justify-center relative shadow-lg rounded-xl'>
      <Image
        priority
        alt='Dycsa - Torre Suquia'
        layout='fill'
        objectFit='cover'
        placeholder='blur'
        quality={80}
        src={torreSuquiaImg}
        style={{ borderRadius: 12 }}
      />
      <div className='absolute w-full h-full top-0 justify-between bg-gradient-to-b from-[rgba(0,0,0,.3)] to-transparent'>
        <div className='w-full h-full p-4 flex flex-col justify-between'>
          <div className='space-y-4'>
            <h2 className='text-4xl text-white font-bold'>Torre Suquia</h2>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ducimus labore distinctio nulla expedita dolorum ex cumque rerum, reiciendis delectus!</p>
          </div>
          <div className='flex justify-end'>
            <Button content='+' cssProps='rounded-full' onClick={() => console.log('hola')} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TowerCard
