'use client'
import React, { useRef } from 'react'

import Section from '@/components/common/section'
import Title from '@/components/common/titles'
import TabsContainer from '@/components/container/tabs'
import useVisible from '@/hooks/useVisible'

const SectionUno: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useVisible(ref)

  return (
    <Section>
      <div ref={ref} className={`flex flex-col items-center space-y-4 justify-center mt-12 transition-opacity ease-in duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Title content='Ubicación privilegiada en una zona exclusiva' cssProps='text-center' />
        <TabsContainer />
      </div>
    </Section>
  )
}

export default SectionUno
