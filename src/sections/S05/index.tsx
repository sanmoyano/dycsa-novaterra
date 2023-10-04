'use client'

import React from 'react'
import Link from 'next/link'

import Section from '@/components/common/section'
import VisibleContainer from '@/components/container/visibleContainer'
import Button from '@/components/common/button'

const SectionCinco: React.FC = () => {
  return (
    <Section>
      <VisibleContainer>
        <div className='bg-primary-100 shadow-xl rounded-xl w-full h-full flex justify-center'>
          <div className='p-6 flex flex-col w-full lg:max-w-3xl items-center justify-center space-y-6 min-h-[300px] lg:min-h-[350px] xl:min-h-[450px] xl:space-y-10'>
            <h2 className='text-white text-2xl lg:text-3xl text-center'>Entrega en cuotas, posesión prevista{' '}
              <span className='font-bold underline-text before:bg-white before:h-1'>
                <Link href='/'>Diciembre 2024</Link>
              </span>
            </h2>
            <p className='text-white text-center'>EMPRENDIMIENTO APTO PARA BLANQUEO</p>
            <Button content='Conocer más' onClick={() => console.log('holis')} />
            {/* <p className='text-white text-xl lg:text-2xl text-center'>Viví en modo <span className='font-bold'>Casagrande</span></p> */}
          </div>
        </div>
      </VisibleContainer>
    </Section>
  )
}

export default SectionCinco
