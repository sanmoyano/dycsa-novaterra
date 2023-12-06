import React from 'react'
import Image from 'next/image'

import Section from '@/components/common/section'
import Title from '@/components/common/titles'
import VisibleContainer from '@/components/container/visibleContainer'

import novaterraRender from '../../../public/images/render-3.jpg'

const SectionUno: React.FC = () => {
  return (
    <Section>
      <VisibleContainer>
        <div className='w-full h-[550px] md:h-[700px] lg:h-[550px] xl:h-[600px] flex flex-col lg:flex-row items-center justify-center relative'>
          <div className='w-full lg:w-2/3 bg-primary-100 h-full lg:h-5/6 absolute right-0 rounded-2xl' />
          <div className='flex flex-col lg:flex-row justify-between lg:justify-evenly items-center absolute'>
            <div className='w-4/6 rounded-xl shadow-lg'>
              <Image alt='novaterra render' className='rounded-xl' placeholder='blur' quality={80} sizes='auto' src={novaterraRender} />
            </div>
            <div className='flex flex-col space-y-2 w-full lg:w-1/2 p-6 rounded-xl h-fit'>
              <Title content='Invertí en lo que avanza' cssProps='text-left text-white' />
              <p className='text-white'>Lorem ipsum dolor sit amet consectetur. Cursus habitant urna egestas neque lectus etiam libero consequat. Diam suscipit ultrices amet at facilisi vitae semper bibendum. Tellus senectus diam arcu vivamus parturient interdum at. Molestie ultrices augue nullam vulputate vitae imperdiet varius lacus vestibulum.</p>
            </div>
          </div>
        </div>
      </VisibleContainer>
    </Section>
  )
}

export default SectionUno
