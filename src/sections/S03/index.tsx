import React from 'react'

import Section from '@/components/common/section'
import VisibleContainer from '@/components/container/visibleContainer'
import Title from '@/components/common/titles'

type GridItemProps = {
  title?:string
  content?:string
  icon?:React.ReactNode
}

const GridItemInfo: React.FC<GridItemProps> = ({ content, icon, title }) => {
  return (
    <div className='flex flex-col text-primary-100 space-y-2 justify-center'>
      <svg className='w-8 h-8' fill='none' stroke='currentColor' strokeWidth={1.5} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
      <p className='text-primary-100 text-xl font-bold'>Title</p>
      <p className='text-primary-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ipsum esse sapiente ullam doloremque deserunt.</p>
    </div>
  )
}

const SectionTres = () => {
  return (
    <Section>
      <VisibleContainer>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-36 mt-12'>
          <div className='flex flex-col space-y-4 items-start'>
            <Title content='Amplia tu calidad de vida. Viví a lo grande' cssProps='lg:text-6xl mb-5 lg:mb-0 text-center lg:text-left' />
            <div className='hidden lg:flex text-primary-100'>
              <svg className='w-[24px] h-[350px]' viewBox='0 0 24 300' xmlns='http://www.w3.org/2000/svg'>
                <path d='M12.27,0 L12.27,294' fill='none' stroke='currentColor' stroke-miterlimit='10' strokeWidth='2px' />
                <path d='M2.2,284.76 L12.27,295.6 L22.34,284.76' fill='none' stroke='currentColor' stroke-miterlimit='10' strokeWidth='2px' />
              </svg>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6'>
            <GridItemInfo />
            <GridItemInfo />
            <GridItemInfo />
            <GridItemInfo />
          </div>
        </div>
      </VisibleContainer>
    </Section>
  )
}

export default SectionTres
