import React from 'react'

import Section from '@/components/common/section'
import VisibleContainer from '@/components/container/visibleContainer'
import VideosContainer from '@/components/container/listVideo'
import LogoCasaGrande from '@/components/common/logoCasaGrande'

import TitleS03 from './title'
const SectionTres = () => {
  return (
    <Section>
      <VisibleContainer>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-32 mt-12'>
          <TitleS03 />
          <VideosContainer />
        </div>
        <LogoCasaGrande />
      </VisibleContainer>
    </Section>
  )
}

export default SectionTres
