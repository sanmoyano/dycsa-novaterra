'use client'

import React from 'react'

import Button from '@/components/common/button'
import NavItem from '@/components/common/nav'
import Logo from '@/components/common/logo'

const Header: React.FC = () => {
  return (
    <header>
      <nav className='flex flex-row absolute items-center justify-between px-3.5 md:px-6 lg:px-12 mt-12 w-full'>
        <Logo />
        <div className='flex flex-row space-x-10 text-white'>
          <NavItem content='Proyecto' url='as' />
          <NavItem content='Ubicación' url='as' />
        </div>
        <Button content='Contactanos' onClick={() => console.log('contacto')} />
      </nav>
    </header>
  )
}

export default Header
