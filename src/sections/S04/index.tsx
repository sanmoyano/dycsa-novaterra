import React from 'react'

import Section from '@/components/common/section'
import VisibleContainer from '@/components/container/visibleContainer'
import PlanimetriasContainer from '@/components/container/planimetrias'
import SubTitle from '@/components/common/subTitle'
import Title from '@/components/common/titles'

const SectionCuatro: React.FC = () => {
  return (
    <Section>
      <VisibleContainer>
        <SubTitle content='Conocé nuestro departamento modelo' cssProps='text-secondary-100' />
        <Title content='Planimetrias' />
        <PlanimetriasContainer />
      </VisibleContainer>
    </Section>
  )
}

export default SectionCuatro
