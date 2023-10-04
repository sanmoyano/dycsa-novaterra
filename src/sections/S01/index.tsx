import React from 'react'
import Image from 'next/image'

import Section from '@/components/common/section'
import Title from '@/components/common/titles'
import TabsContainer from '@/components/container/tabs'
import VisibleContainer from '@/components/container/visibleContainer'

const SectionUno: React.FC = () => {
  return (
    <Section>
      <VisibleContainer>
        <div className='flex fex-col md:flex-row'>
          <div className='w-1/2 bg-[red]'>
            <p>imagen</p>
          </div>
          {/* <Image  /> */}
          <div className='flex flex-col w-1/2 bg-primary-100 p-6 rounded-xl'>
            <Title content='Invertí en lo que avanza' cssProps='text-left text-white' />
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur. Cursus habitant urna egestas neque lectus etiam libero consequat. Diam suscipit ultrices amet at facilisi vitae semper bibendum. Tellus senectus diam arcu vivamus parturient interdum at. Molestie ultrices augue nullam vulputate vitae imperdiet varius lacus vestibulum.</p>
          </div>
        </div>
        {/* <TabsContainer /> */}
      </VisibleContainer>
    </Section>
  )
}

export default SectionUno
