import React from 'react'

import Title from '@/components/common/titles'

const TitleS03 = () => {
  return (
    <div className='flex flex-col space-y-4 items-start'>
      <Title content='Amplia tu calidad de vida. Viví a lo grande' cssProps='lg:text-6xl lg:mb-0 text-center lg:text-left' />
      <div className='hidden lg:flex text-primary-100'>
        <svg className='w-[24px] h-[350px]' viewBox='0 0 24 300' xmlns='http://www.w3.org/2000/svg'>
          <path d='M12.27,0 L12.27,294' fill='none' stroke='currentColor' stroke-miterlimit='10' strokeWidth='2px' />
          <path d='M2.2,284.76 L12.27,295.6 L22.34,284.76' fill='none' stroke='currentColor' stroke-miterlimit='10' strokeWidth='2px' />
        </svg>
      </div>
    </div>
  )
}

export default TitleS03
