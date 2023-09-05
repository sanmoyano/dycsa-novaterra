import React from 'react'

import Section from '@/components/common/section'
import Title from '@/components/common/titles'
import TabsContainer from '@/components/container/tabs'
import VisibleContainer from '@/components/container/visibleContainer'

const SectionUno: React.FC = () => {
  return (
    <Section>
      <VisibleContainer>
        <Title content='Ubicación privilegiada en una zona exclusiva' cssProps='text-center' />
        <TabsContainer />
      </VisibleContainer>
    </Section>
  )
}

export default SectionUno
