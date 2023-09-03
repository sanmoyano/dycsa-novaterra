'use client'
import React, { useState } from 'react'

import Section from '@/components/common/section'
import Title from '@/components/common/titles'

const tabs = [
  'Complejo',
  'Departamentos',
  'Amenities'
]

const SectionUno: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0)

  const handleChangeTab = (index: number) => {
    setActiveTab(index)
  }

  return (
    <Section>
      <div className='flex flex-col items-center space-y-8 justify-center mt-12'>
        <Title content='Ubicación privilegiada en una zona exclusiva' cssProps='text-center' />
        <div className='text-center'>
          <ul className='hidden md:flex flex-wrap w-96 justify-between'>
            {tabs.map((tab, i) => (
              <li key={i} className={`block ${activeTab === i ? 'opacity-1 font-bold' : 'opacity-40 font-normal'} text-primary-100 text-lg text-center transition ease-in-out duration-500 mx-1`} onClick={() => handleChangeTab(i)}>
                <span className='underline-text before:bg-primary-100 before:h-0.5'>
                  {tab}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

export default SectionUno
