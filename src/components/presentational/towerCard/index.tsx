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
          <p className='text-white'>{description}</p>
        </div>
        <div className='flex justify-end z-10 absolute bottom-4 right-4'>
          <span title='Ver mas'>
            <Button
              cssProps='rounded-full text-center inline-flex items-center w-[40px] h-[40px'
              icon={isOpen[index]
                ? <path d='M19.5 8.25l-7.5 7.5-7.5-7.5' strokeLinecap='round' strokeLinejoin='round' />
                : <path d='M4.5 15.75l7.5-7.5 7.5 7.5' strokeLinecap='round' strokeLinejoin='round' />}
              onClick={handleOpen}
            />
          </span>
        </div>
      </DivContainer>
      <DivContainer cssProps={`${isOpen[index] ? 'flex opacity-100' : 'hidden opacity-0'} bg-primary-200 lg:${activeIndex === null ? '' : activeIndex === 0 ? 'left-full' : 'right-full'} lg:bg-primary-100 lg:w-[500px]`}>
        <ul className='w-full h-full'>
          {info.map((info, index) => (
            <ItemList key={index} cssProps='text-white' icon={<path clipRule='evenodd' d='M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z' fillRule='evenodd' />} info={info} />
          ))}
        </ul>
      </DivContainer>
    </div>
  )
}

export default TowerCard
