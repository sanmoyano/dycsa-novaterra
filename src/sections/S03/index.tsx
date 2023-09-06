import React from 'react'

import Section from '@/components/common/section'
import VisibleContainer from '@/components/container/visibleContainer'
import Title from '@/components/common/titles'

const SectionTres = () => {
  return (
    <Section>
      <VisibleContainer>
        <div className='grid grid-cols-2 gap-36 mt-12'>
          <div className='flex flex-col space-y-4 items-start'>
            <Title content='Aplia tu calidad de vida. Viví a lo grande' cssProps='lg:text-6xl' />
            <div className='text-primary-100'>
              <svg className='w-[24px] h-[250px]' viewBox='0 0 24 300' xmlns='http://www.w3.org/2000/svg'>
                <path d='M12.27,0 L12.27,294' fill='none' stroke='currentColor' stroke-miterlimit='10' strokeWidth='2px' />
                <path d='M2.2,284.76 L12.27,295.6 L22.34,284.76' fill='none' stroke='currentColor' stroke-miterlimit='10' strokeWidth='2px' />
              </svg>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-8'>
            <p className='bg-primary-100'>datitas</p>
            <p className='bg-primary-100'>datitas</p>
            <p className='bg-primary-100'>datitas</p>
            <p className='bg-primary-100'>datitas</p>
          </div>
        </div>
      </VisibleContainer>
    </Section>
  )
}

export default SectionTres
