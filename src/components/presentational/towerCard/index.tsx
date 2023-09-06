'use client'

import React from 'react'
import Image from 'next/image'
// import dynamic from 'next/dynamic'

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
    <div className={`absolute w-full h-full top-0 ${cssProps}`}>
      <div className='w-full h-full p-4 flex flex-col'>
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
        <div className={`${isOpen[index] ? 'hidden' : ''} space-y-4`}>
          <h2 className='text-4xl text-white font-bold'>{title}</h2>
          <p className='text-white'>{description}</p>
        </div>
        <div className='flex justify-end z-10 absolute bottom-4 right-2'>
          <Button
            cssProps='rounded-full text-center inline-flex items-center mr-2 w-[40px] h-[40px]'
            icon={isOpen[index]
              ? <path d='M19.5 8.25l-7.5 7.5-7.5-7.5' stroke-linecap='round' stroke-linejoin='round' />
              : <path d='M4.5 15.75l7.5-7.5 7.5 7.5' stroke-linecap='round' stroke-linejoin='round' />}
            onClick={handleOpen}
          />
        </div>
      </DivContainer>
      <DivContainer cssProps={`${isOpen[index] ? 'flex opacity-100' : 'hidden opacity-0'} bg-primary-200`}>
        {info.map((info, index) => (
          <div key={index} className='flex flex-row text-white w-full items-center space-x-4'>
            <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path clip-rule='evenodd' d='M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z' fill-rule='evenodd' />
            </svg>
            <p className='text-lg'>{info}</p>
          </div>
        ))}
      </DivContainer>
    </div>
  )
}

export default TowerCard
