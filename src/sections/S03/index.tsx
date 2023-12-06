import React from 'react'
import { Carousel } from 'flowbite-react'
import Image from 'next/image'

import Section from '@/components/common/section'
import VisibleContainer from '@/components/container/visibleContainer'
import Title from '@/components/common/titles'
import SubTitle from '@/components/common/subTitle'

import renderUno from '../../../public/images/render-1.jpeg'
import renderDos from '../../../public/images/render-2.jpg'
import renderTres from '../../../public/images/render-3.jpg'
import renderCuatro from '../../../public/images/render-4.jpg'

const SectionTres: React.FC = () => {
  return (
    <Section>
      <VisibleContainer>
        <Title content='Características' />
        <SubTitle content='Lorem ipsum.' cssProps='text-xl text-primary-100' />
        <div className='h-[500px] md:h-screen w-full'>
          <Carousel pauseOnHover indicators={false}>
            <div className='h-screen w-full relative'>
              <Image
                fill
                priority
                alt='Render Novaterra III'
                className='object-cover object-center'
                placeholder='blur'
                quality={100}
                src={renderUno}
              />
            </div>
            <div className='h-screen w-full relative'>
              <Image
                fill
                priority
                alt='Render Novaterra III'
                className='object-cover object-center'
                placeholder='blur'
                quality={100}
                src={renderDos}
              />
            </div>
            <div className='h-screen w-full relative'>
              <Image
                fill
                priority
                alt='Render Novaterra III'
                className='object-cover object-center'
                placeholder='blur'
                quality={100}
                src={renderTres}
              />
            </div>
            <div className='h-screen w-full relative'>
              <Image
                fill
                priority
                alt='Render Novaterra III'
                className='object-cover object-center'
                placeholder='blur'
                quality={100}
                src={renderCuatro}
              />
            </div>
          </Carousel>
        </div>
      </VisibleContainer>
    </Section>
  )
}

export default SectionTres
