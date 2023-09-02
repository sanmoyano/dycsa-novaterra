'use client'

import React from 'react'

import Button from '@/components/common/button'

const Header: React.FC = () => {
  return (
    <header>
      <nav className='flex flex-row absolute items-center justify-between px-3.5 md:px-6 lg:px-12 mt-12 w-full'>
        <p className='text-white'>logo</p>
        <div className='flex flex-row space-x-10'>
          <p className='text-white'>Proyecto</p>
          <p className='text-white'>Ubicación</p>
        </div>
        <Button content='Contactanos' onClick={() => console.log('contacto')} />
      </nav>
    </header>
  )
}

export default Header
