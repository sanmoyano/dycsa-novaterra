import React from 'react'

import HeroTitle from '@/components/common/title'

const HeroSection = () => {
  return (
    <div className='bg-hero-section bg-cover bg-no-repeat bg-center bg-fixed w-full h-screen flex items-center justify-start'>
      <div className='flex flex-col justify-center px-3.5 md:px-6 lg:px-12 w-[80%] md:w-[70%] lg:w-[50%] h-full'>
        <HeroTitle content='Acá arriba la vista es' span=' mejor' />
      </div>
    </div>
  )
}

export default HeroSection
