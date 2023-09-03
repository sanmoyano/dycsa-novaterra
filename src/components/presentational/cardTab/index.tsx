import React from 'react'
import Image from 'next/image'

import Button from '@/components/common/button'

import { TabProp } from '../tabs'

const TabCard:React.FC<TabProp> = ({ activeTab, tabs }) => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between w-full h-fit mt-6'>
      <div className='h-[400px] w-full lg:w-[650px] flex flex-col justify-center relative'>
        <Image
          alt={tabs[activeTab].alt}
          layout='fill'
          objectFit='cover'
          placeholder='blur'
          quality={80}
          src={tabs[activeTab].img}
          style={{ borderRadius: 12 }}
        />
      </div>
      <div className='flex flex-col w-full mt-6 lg:w-1/2 lg:mt-0'>
        <h2>{tabs[activeTab].title}</h2>
        <p>{tabs[activeTab].description}</p>
        <Button content='Conoce más' onClick={() => console.log('')} />
      </div>
    </div>
  )
}

export default TabCard
