import React from 'react'

import Title from '@/components/common/titles'
import Section from '@/components/common/section'
import VisibleContainer from '@/components/container/visibleContainer'
import SubTitle from '@/components/common/subTitle'
import TowersContainer from '@/components/container/towers'

const SectionDos:React.FC = () => {
  return (
    <Section>
      <VisibleContainer>
        <SubTitle content='Descubre la Elagancia y la Comodidad' cssProps='text-secondary-100' />
        <Title content='Visión Integran del Espacio' />
        <div className='w-full h-full flex flex-col space-y-5 md:flex-row md:space-y-0 items-center justify-evenly lg:justify-center lg:space-x-20 pt-8'>
          <TowersContainer />
        </div>
      </VisibleContainer>
    </Section>
  )
}

export default SectionDos
