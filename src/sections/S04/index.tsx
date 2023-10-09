import React from 'react'

import Section from '@/components/common/section'
import VisibleContainer from '@/components/container/visibleContainer'
// import PlanimetriasContainer from '@/components/container/planimetrias'
import SubTitle from '@/components/common/subTitle'
import Title from '@/components/common/titles'

const SectionCuatro: React.FC = () => {
  return (
    <Section>
      <VisibleContainer>
        <SubTitle content='Conocé nuestro departamento modelo' cssProps='text-secondary-100' />
        <Title content='Departamento modelo' />
        {/* <PlanimetriasContainer /> */}
        <div className='h-full w-full lg:w-4/5 pt-10' id='depto-modelo'>
          <div className='aspect-w-16 aspect-h-9'>
            <iframe allowFullScreen allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' className='rounded-xl' height='315' src='https://my.matterport.com/show/?m=DeYW6gqpnbS' title='YouTube video player' width='560' />
          </div>
        </div>
      </VisibleContainer>
    </Section>
  )
}

export default SectionCuatro
