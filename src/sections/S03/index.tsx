import React from 'react'
import Image from 'next/image'

import Section from '@/components/common/section'
import VisibleContainer from '@/components/container/visibleContainer'
import Title from '@/components/common/titles'
import VideosContainer from '@/components/container/listVideo'

const SectionTres = () => {
  return (
    <Section>
      <VisibleContainer>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-32 mt-12'>
          <div className='flex flex-col space-y-4 items-start'>
            <Title content='Amplia tu calidad de vida. Viví a lo grande' cssProps='lg:text-6xl lg:mb-0 text-center lg:text-left' />
            <div className='hidden lg:flex text-primary-100'>
              <svg className='w-[24px] h-[350px]' viewBox='0 0 24 300' xmlns='http://www.w3.org/2000/svg'>
                <path d='M12.27,0 L12.27,294' fill='none' stroke='currentColor' stroke-miterlimit='10' strokeWidth='2px' />
                <path d='M2.2,284.76 L12.27,295.6 L22.34,284.76' fill='none' stroke='currentColor' stroke-miterlimit='10' strokeWidth='2px' />
              </svg>
            </div>
          </div>
          <VideosContainer />
        </div>
        <div className='flex flex-col justify-center md:flex-row w-fit md:space-x-4 pt-5 lg:pt-12 items-center'>
          <h2 className='text-2xl text-primary-100 leading-7'>Viví en modo <br /><span className='font-bold'>Casagrande</span></h2>
          <Image
            alt='Dycsa - Casa Grande Laplace'
            height={200}
            src='/logo/logo-casa-grande.svg'
            style={{ height: 200, width: 200 }}
            width={200}
          />
        </div>
      </VisibleContainer>
    </Section>
  )
}

export default SectionTres
