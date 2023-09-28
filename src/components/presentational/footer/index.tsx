'use client'
import React from 'react'

import Button from '@/components/common/button'
import LogoCasaGrande from '@/components/common/logoCasaGrande'

type IntputProps = {
  label:string
  id:string
  type:string
  placeholder:string
  htmlFor:string
}

const ItemInput:React.FC<IntputProps> = ({ id, label, placeholder, type, htmlFor }) => {
  return (
    <div className='mb-6'>
      <label className='block mb-2 text-md font-medium text-white' htmlFor={htmlFor}>{label}</label>
      <input required className='bg-gray-100 border border-gray-300 text-primary-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' id={id} placeholder={placeholder} type={type} />
    </div>
  )
}

const Footer: React.FC = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center w-full bg-gradient-to-t from-[rgba(3,19,51,.7)] to-transparent'>
      <div className='w-full lg:w-1/2 h-full px-3.5 py-8 sm:px-8 md:p-12 xl:p-24'>
        <form action='#' className='mb-6'>
          <ItemInput htmlFor='email' id='email' label='Email' placeholder='email@gmail.com' type='email' />
          <ItemInput htmlFor='name' id='name' label='Nombre y Apellido' placeholder='Nombre Apellido' type='text' />
          <ItemInput htmlFor='tel' id='tel' label='Tel' placeholder='123 456 78963' type='text' />
          <div className='mb-6'>
            <label className='block mb-2 text-md font-medium text-white' htmlFor='message'>Mensaje</label>
            <textarea required className='bg-gray-100 border border-gray-300 text-primary-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' id='message' placeholder='Mensaje...' rows={4} />
          </div>
          <Button content='Enviar' cssProps='w-full' onClick={() => console.log('enviar')} />
        </form>
        <p className='mb-2 text-sm text-white'>
          <a className='hover:underline' href='#'>info@company.com</a>
        </p>
        <p className='text-sm text-white'>
          <a className='hover:underline' href='#'>212-456-7890</a>
        </p>
      </div>
      <div className='w-full lg:w-1/2 flex flex-col items-center justify-center'>
        <LogoCasaGrande heigth={200} logo='/logo/slogan-casa-grande.svg' width={300} />
        <LogoCasaGrande heigth={200} logo='/logo/logo-casa-grande-b.svg' width={300} />
      </div>
    </div>
  )
}

export default Footer
