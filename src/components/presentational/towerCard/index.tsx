'use client'

import React from 'react'
import Image from 'next/image'

import Button from '@/components/common/button'
import { ITowersInfo } from '@/components/container/towers'
import ItemList from '@/components/common/itemList'

type Tower = ITowersInfo & {
  handleOpen: () => void
  index:number
  isOpen:boolean[]
  activeIndex:number | null
}

type DivProps = {
  children: React.ReactNode
  cssProps:string
}

const DivContainer: React.FC<DivProps> = ({ children, cssProps }) => {
  return (
    <div className={`absolute w-full h-full top-0 ${cssProps} rounded-xl`}>
      <div className='w-full h-full p-4 flex flex-col'>
        {children}
      </div>
    </div>
  )
}

const TowerCard: React.FC<Tower> = ({ activeIndex, title, description, alt, img, info, handleOpen, isOpen, index }) => {
  return (
    <div className={`${activeIndex === null ? 'lg:opacity-100' : activeIndex !== index ? 'lg:opacity-0' : ''} h-[600px] aspect-[9/16] md:h-[400px] flex flex-col md:aspect-[4/5] lg:h-[500px] lg:aspect-[4/5] min-[1025px]:h-[600px] relative shadow-lg rounded-xl`}>
      <Image
        fill
        priority
        alt={alt}
        className={`rounded-xl object-cover ${index === 0 ? 'object-left' : 'object-center'}`}
        placeholder='blur'
        quality={80}
        sizes='auto'
        src={img}
      />
      <DivContainer cssProps='bg-gradient-to-b from-[rgba(0,0,0,.3)] to-transparent'>
        <div className={`${isOpen[index] ? 'hidden' : 'flex flex-col'} lg:flex lg:flex-col space-y-4`}>
          <h2 className='text-4xl text-white font-bold'>{title}</h2>
        </div>
        <div className='flex justify-end z-10 absolute bottom-4 right-4'>
          <span title='Ver mas'>
            <Button
              cssProps='rounded-full text-center inline-flex items-center w-[40px] h-[40px'
              icon={isOpen[index]
                ? <path d='M19.5 12h-15' strokeLinecap='round' strokeLinejoin='round' />
                : <path d='M12 4.5v15m7.5-7.5h-15' strokeLinecap='round' strokeLinejoin='round' />}
              onClick={handleOpen}
            />
          </span>
        </div>
      </DivContainer>
      <DivContainer cssProps={`${isOpen[index] ? 'flex opacity-100' : 'hidden opacity-0'} bg-primary-200 ${activeIndex === null ? '' : activeIndex === 0 ? 'lg:left-full' : 'lg:right-full'} lg:bg-primary-100 lg:w-[500px] xl:w-[600px] `}>
        <ul className='flex flex-col w-full h-full justify-center space-y-5'>
          {info.map((info, index) => (
            <ItemList key={index} cssProps='text-white' icon={<path d='M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6' strokeLinecap='round' strokeLinejoin='round' />} info={info} />
          ))}
        </ul>
      </DivContainer>
    </div>
  )
}

export default TowerCard
