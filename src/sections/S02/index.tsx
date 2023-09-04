'use client'
import React, { useRef } from 'react'

import Title from '@/components/common/titles'
import Section from '@/components/common/section'
import TowerCard from '@/components/presentational/towerCard'
import useVisible from '@/hooks/useVisible'

const SectionDos:React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useVisible(ref)

  return (
    <Section>
      <div ref={ref} className={`flex flex-col items-center space-y-2 justify-center mt-12 transition-opacity ease-in duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <p className='text-secondary-100 w-fit text-sm'>Descubre la Elegancia y la Comodidad</p>
        <Title content='Visión Integran del Espacio' />
        <div className='w-full h-full flex flex-col space-y-5 md:flex-row md:space-y-0 items-center justify-evenly pt-8'>
          <TowerCard />
          <div className='bg-green-500 h-[400px] lg:h-[600px] aspect-[4/5] flex flex-col justify-center relative shadow-lg rounded-xl'>
            <p>card2</p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default SectionDos
