import React from 'react'

import Section from '@/components/common/section'
import VisibleContainer from '@/components/container/visibleContainer'
// import VideosContainer from '@/components/container/listVideo'
import LogoCasaGrande from '@/components/common/logoCasaGrande'

import TitleS03 from './title'
const SectionTres: React.FC = () => {
  return (
    <Section>
      <VisibleContainer>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-12 justify-center'>
          <TitleS03 />
          <div className='h-full flex flex-col justify-between'>
            <div className='aspect-w-16 aspect-h-9'>
              <iframe allowFullScreen allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' className='rounded-xl' height='315' src='https://www.youtube.com/embed/MI7LWm2qhyQ?si=M2J4rn6kAxUdLsmo' title='YouTube video player' width='560' />
            </div>
            <div className='flex flex-col h-full justify-center items-center space-y-5 text-primary-100 mt-10 text-justify lg:text-left'>
              <p>Con un frente imponente de 60 metros, Casagrande Laplace se encuentra en una zona increíblemente privilegiada en el corazón de Villa Belgrano, al norte de la Capital de Córdoba.</p>
              <p>El desarrollo despliega a sus espaldas, sobre los vértices de una bella y amplia barranca, una invaluable y hermosa panorámica hacia el río Suquíaa través de un parque de grandes arboledas, favoreciendo la contemplación y la intensidad de lo natural.</p>
            </div>
          </div>
          {/* <VideosContainer /> */}
        </div>
        <LogoCasaGrande visible heigth={200} logo='/logo/logo-casa-grande.svg' width={200} />
      </VisibleContainer>
    </Section>
  )
}

export default SectionTres
