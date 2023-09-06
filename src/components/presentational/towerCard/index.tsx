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

const TowerCard: React.FC<Tower> = ({ title, description, alt, img, info, handleOpen, isOpen, index }) => {
  return (
    <div className='h-[400px] lg:h-[600px] overflow-hidden aspect-[4/5] flex flex-col justify-center relative shadow-lg rounded-xl'>
      <Image
        fill
        priority
        alt={alt}
        className='rounded-xl object-cover object-center'
        placeholder='blur'
        quality={80}
        sizes='auto'
        src={img}
      />
      <DivContainer cssProps='bg-gradient-to-b from-[rgba(0,0,0,.3)] to-transparent'>
        <div className={`${isOpen[index] ? 'hidden' : ''} space-y-4`}>
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
      <DivContainer cssProps={`${isOpen[index] ? 'flex opacity-100' : 'hidden opacity-0'} bg-primary-200`}>
        <ul className='w-full h-full'>
          {info.map((info, index) => (
            <li key={index} className='flex flex-row text-white w-full items-center space-x-4'>
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path clipRule='evenodd' d='M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z' fillRule='evenodd' />
              </svg>
              <p className='text-xs lg:text-lg'>{info}</p>
            </li>
          ))}
        </ul>
      </DivContainer>
    </div>
  )
}

export default TowerCard
