import React from 'react'
// import Image from 'next/image'

import Title from '@/components/common/titles'
import Section from '@/components/common/section'
import VisibleContainer from '@/components/container/visibleContainer'
import SubTitle from '@/components/common/subTitle'

// import portadaImage from '../../../public/images/portada-novaterra.jpg'
const SectionDos:React.FC = () => {
  return (
    <Section>
      <VisibleContainer>
        <Title content='¿Te vendrías a Guemes?' />
        <div className='w-full h-fit flex flex-col relative items-center py-12'>
          <div className='w-fit h-2/3 grid grid-cols-1 lg:grid-cols-3 z-10 gap-6'>
            <div className='h-full w-fit p-2 flex flex-col'>
              <div className='aspect-w-16 aspect-h-9 lg:aspect-square'>
                <iframe allowFullScreen allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' height='315' src='https://www.youtube.com/embed/qiMwSlFnTfE?si=0W2x7abZUAgJV-M4' title='YouTube video player' width='auto' />
              </div>
              <div className='w-fit p-4'>
                <SubTitle content='Conocé Guemes' cssProps='text-xl font-bold text-primary-100' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, provident.</p>
              </div>
            </div>
            <div className='h-full w-fit p-2'>
              <div className='aspect-w-16 aspect-h-9 lg:aspect-square'>
                <iframe allowFullScreen allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' height='315' src='https://www.youtube.com/embed/HifsWxcYFnc?si=CXr2DEfXOxUajfKb' title='YouTube video player' width='auto' />
              </div>
              <div className='w-fit p-4'>
                <SubTitle content='El edificio' cssProps='text-xl font-bold text-primary-100' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, provident.</p>
              </div>
            </div>
            <div className='h-full w-fit p-2'>
              <div className='aspect-w-16 aspect-h-9 lg:aspect-square'>
                <iframe allowFullScreen allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' height='315' src='https://www.youtube.com/embed/StaV9t-v9dk?si=ZfnLWOrQUMzioit8' title='YouTube video player' width='auto' />
              </div>
              <div className='w-fit p-4'>
                <SubTitle content='Avances' cssProps='text-xl font-bold text-primary-100' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, provident.</p>
              </div>
            </div>
          </div>
        </div>
      </VisibleContainer>
    </Section>
  )
}

export default SectionDos
