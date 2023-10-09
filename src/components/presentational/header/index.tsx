'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import Button from '@/components/common/button'
import NavItem from '@/components/common/nav'
import Logo from '@/components/common/logo'

const Header: React.FC = () => {
  const [isAria, setAria] = useState<boolean>(false)

  const handleOpenCloseMenu = () => {
    setAria(!isAria)
  }
  const handleCloseMenu = () => {
    setAria(false)
  }

  return (
    <header>
      <nav className='w-full flex flex-wrap absolute items-center justify-between px-3.5 md:px-8 lg:px-12 xl:px-24 mt-3.5 md:mt-8'>
        <Logo />
        <button aria-controls='navbar-default' aria-expanded={isAria} className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200' data-collapse-toggle='navbar-default' type='button' onClick={handleOpenCloseMenu}>
          <span className='sr-only'>Open main menu</span>
          {!isAria
            ? (
              <svg aria-hidden='true' className='w-5 h-5' fill='none' viewBox='0 0 17 14' xmlns='http://www.w3.org/2000/svg'>
                <path d='M1 1h15M1 7h15M1 13h15' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' />
              </svg>
              )
            : (
              <svg aria-hidden='true' className='w-5 h-5' fill='none' viewBox='0 0 17 14' xmlns='http://www.w3.org/2000/svg'>
                <line stroke='currentColor' stroke-width='2' x1='1' x2='16' y1='1' y2='13' />
                <line stroke='currentColor' stroke-width='2' x1='1' x2='16' y1='13' y2='1' />
              </svg>
              )}
        </button>
        <div className={`${!isAria ? 'hidden' : ''} w-full md:block md:w-auto text-white`} id='navbar-default'>
          <ul className={`flex flex-col mt-5 p-4 space-y-2 ${isAria ? 'bg-gray-200 rounded border border-white' : ''} md:flex-row md:mt-0 md:space-x-10 md:space-y-0 md:bg-transparent md:p-0 md:border-none`}>
            <NavItem closeMenu={handleCloseMenu} content='Proyecto' url='#proyecto' />
            <NavItem closeMenu={handleCloseMenu} content='Ubicación' url='#ubicacion' />
          </ul>
        </div>
        <Link href='#contacto'>
          <Button content='Contactanos' cssProps='hidden md:block' />
        </Link>
      </nav>
    </header>
  )
}

export default Header
