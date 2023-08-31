import React from 'react'

import HeroTitle from '@/components/common/title'

const HeroSection = () => {
  return (
    <div className='bg-hero-section bg-cover bg-no-repeat bg-center bg-fixed w-screen h-screen flex items-center justify-center'>
      <div className='p-12 w-full h-full'>
        <HeroTitle content='HERO' />
      </div>
    </div>
  )
}

export default HeroSection
