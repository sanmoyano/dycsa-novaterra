import React from 'react'

import Section from '@/components/common/section'
import VisibleContainer from '@/components/container/visibleContainer'
import VideosContainer from '@/components/container/listVideo'
import LogoCasaGrande from '@/components/common/logoCasaGrande'

import TitleS03 from './title'
const SectionTres: React.FC = () => {
  return (
    <Section>
      <VisibleContainer>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:gap-12 justify-center'>
          <TitleS03 />
          <VideosContainer />
        </div>
        <LogoCasaGrande />
      </VisibleContainer>
    </Section>
  )
}

export default SectionTres
