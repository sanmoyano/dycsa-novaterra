import React, { useRef } from 'react'
import Image from 'next/image'

import Button from '@/components/common/button'

import { TabProp } from '../tabsList'

const TabCard:React.FC<TabProp> = ({ activeTab, tabs }) => {
  const divRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={divRef} className='transition ease-in-out duration-300 flex flex-col lg:flex-row items-center justify-evenly w-full h-fit mt-12'>
      <div className='h-[400px] w-full lg:w-[650px] flex flex-col justify-center relative shadow-lg rounded-xl'>
        <Image
          priority
          alt={tabs[activeTab].alt}
          layout='fill'
          objectFit='cover'
          placeholder='blur'
          quality={80}
          src={tabs[activeTab].img}
          style={{ borderRadius: 12 }}
        />
      </div>
      <div className={`flex flex-col justify-evenly w-full h-[${divRef.current?.offsetHeight}px] mt-6 lg:w-[500px] lg:mt-0`}>
        <h2 className='text-primary-100 font-bold text-2xl'>{tabs[activeTab].title}</h2>
        <p className='text-primary-300 mb-2'>{tabs[activeTab].description}</p>
        <p className='text-primary-300'>{tabs[activeTab].description}</p>
        <div className='flex flex-row space-x-8 mt-6'>
          {/* CARD DATO */}
          <div className='flex flex-col items-center'>
            <p className='font-bold text-4xl text-center text-yellow-500'>+12</p>
            <p className='font-bold text-xs text-center text-primary-300'>PRIMER DATO</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='font-bold text-4xl text-center text-blue-500'>+87</p>
            <p className='font-bold text-xs text-center text-primary-300'>SEGUNDO DATO</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='font-bold text-4xl text-center text-green-500'>+136</p>
            <p className='font-bold text-xs text-center text-primary-300'>TERCER DATO</p>
          </div>
        </div>
        <Button content='Conoce más' cssProps='mt-6' onClick={() => console.log('')} />
      </div>
    </div>
  )
}

export default TabCard
