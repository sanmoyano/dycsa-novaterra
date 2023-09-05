'use client'

import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import Button from '@/components/common/button'
import { ITowersInfo } from '@/components/container/towers'

type Tower = ITowersInfo & {
  handleOpen: () => void
  index:number
  isOpen:boolean[]
}

type DivProps = {
  children: React.ReactNode
  cssProps:string
}

const DivContainer: React.FC<DivProps> = ({ children, cssProps }) => {
  return (
    <div className={`absolute w-full h-full top-0 justify-between ${cssProps}`}>
      <div className='w-full h-full p-4 flex flex-col justify-between'>
        {children}
      </div>
    </div>
  )
}

const TowerCard: React.FC<Tower> = ({ title, description, img, info, handleOpen, isOpen, index }) => {
  return (
    <div className='h-[400px] lg:h-[600px] overflow-hidden aspect-[4/5] flex flex-col justify-center relative shadow-lg rounded-xl'>
      <Image
        priority
        alt='Dycsa - Torre Suquia'
        layout='fill'
        objectFit='cover'
        placeholder='blur'
        quality={80}
        src={img}
        style={{ borderRadius: 12 }}
      />
      <DivContainer cssProps='bg-gradient-to-b from-[rgba(0,0,0,.3)] to-transparent'>
        <div className='space-y-4'>
          <h2 className='text-4xl text-white font-bold'>{title}</h2>
          <p className='text-white'>{description}</p>
        </div>
        <div className='flex justify-end z-10'>
          <Button
            cssProps='rounded-full text-center inline-flex items-center mr-2 w-[40px] h-[40px]'
            icon={isOpen[index]
              ? <path d='M19.5 8.25l-7.5 7.5-7.5-7.5' stroke-linecap='round' stroke-linejoin='round' />
              : <path d='M4.5 15.75l7.5-7.5 7.5 7.5' stroke-linecap='round' stroke-linejoin='round' />}
            onClick={handleOpen}
          />
        </div>
      </DivContainer>
      <DivContainer cssProps={`${isOpen[index] ? 'flex' : 'hidden'} bg-primary-100`}>
        <p>JELOUUUU</p>
      </DivContainer>
    </div>
  )
}

export default TowerCard
