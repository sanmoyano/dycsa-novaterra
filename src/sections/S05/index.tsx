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
          <div className='p-6 flex flex-col w-fit items-center justify-center space-y-6 min-h-[300px] lg:min-h-[350px] xl:min-h-[450px] xl:space-y-10'>
            <h2 className='text-white text-2xl lg:text-3xl text-center'>Entrega y cuotas
              posesión {' '}
              <span className='font-bold underline-text before:bg-white before:h-1'>
                prevista diciembre 2024
              </span>
            </h2>
            <p className='text-white text-center'>EMPRENDIMIENTO APTO PARA BLANQUEO</p>
            <Link href='#contacto'>
              <Button content='Contactanos' />
            </Link>
            <p className='text-white'>Comunicate con nosotros en el horario que te quede mas comodo, al numero <span className='font-bold'><a href='https://wa.me/5493518192818' target='_blank'>351 819-2818</a></span></p>
          </div>
        </div>
      </VisibleContainer>
    </Section>
  )
}

export default SectionCinco
