import React from 'react'

import Section from '@/components/common/section'
import Title from '@/components/common/titles'
import TabsContainer from '@/components/container/tabs'

const SectionUno: React.FC = () => {
  return (
    <Section>
      <div className='flex flex-col items-center space-y-8 justify-center mt-12'>
        <Title content='Ubicación privilegiada en una zona exclusiva' cssProps='text-center' />
        <TabsContainer />
      </div>
    </Section>
  )
}

export default SectionUno
