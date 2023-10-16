import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/common/button'

import { TabProp } from '../tabsList'
type DatoProps = {
  number:number
  dato:string
  index:number
}

const Dato: React.FC<DatoProps> = ({ number, dato, index }) => {
  const color = () => {
    if (index === 0) return 'text-yellow-500'
    if (index === 1) return 'text-blue-500'
    if (index === 2) return 'text-green-500'
  }

  return (
    <div className='flex flex-col items-center'>
      <p className={`font-bold text-4xl text-center ${color()}`}>+{number}</p>
      <p className='font-bold text-xs text-center text-primary-300'>{dato}</p>
    </div>
  )
}

const TabCard:React.FC<TabProp> = ({ activeTab, tabs }) => {
  const divRef = useRef<HTMLDivElement>(null)

  return (
    <div aria-label={`${activeTab}`} className='w-full h-full flex justify-center items-center'>
      <div ref={divRef} className='w-full h-full flex flex-col justify-center lg:flex-row md:justify-between mt-10'>
        <div className='h-[400px] md:h-[350px] lg:h-[400px] 2xl:h-[500px] aspect-[4/3] relative w-full'>
          <Image
            fill
            priority
            alt={tabs[activeTab].alt}
            className='rounded-xl object-cover object-center'
            placeholder='blur'
            quality={80}
            src={tabs[activeTab].img}
          />
        </div>
        <div className={`flex flex-col h-${divRef.current?.offsetHeight}px w-full mt-5 lg:py-3 lg:mt-0 lg:ml-8 xl:ml-16 xl:w-[60%] lg:justify-between xl:justify-center`}>
          <h2 className='text-primary-100 font-bold text-2xl'>{tabs[activeTab].title}</h2>
          <p className='text-primary-300 mt-2'>{tabs[activeTab].description}</p>
          <div className='flex flex-row space-x-8 mt-6'>
            {tabs[activeTab].datos.map((dato, index) => (
              <Dato key={index} dato={dato.dato} index={index} number={dato.number} />
            ))}
          </div>
          <Link href='#depto-modelo'>
            <Button content='Conoce más' cssProps='mt-6' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TabCard
