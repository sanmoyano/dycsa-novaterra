import React from 'react'

import Button from '@/components/common/button'
import { DataUser } from '@/components/container/form/indext'

type IntputProps = {
  label:string
  id:string
  type:string
  placeholder:string
  htmlFor:string
  value:string | number
  name:string
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void
}

const ItemInput:React.FC<IntputProps> = ({ id, label, placeholder, name, type, htmlFor, value, handleOnChange }) => {
  return (
    <div className='mb-6'>
      <label className='block mb-2 text-md font-medium text-white' htmlFor={htmlFor}>{label}</label>
      <input required className='bg-gray-100 border border-gray-300 text-primary-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' id={id} name={name} placeholder={placeholder} type={type} value={value} onChange={handleOnChange} />
    </div>
  )
}

type FormProps = {
  dataUser:DataUser
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void
}

const Form:React.FC<FormProps> = ({ dataUser, handleOnChange }) => {
  return (
    <div className='w-full lg:w-1/2 h-full px-3.5 py-8 sm:px-8 md:p-12 xl:p-24'>
      <form action='#' className='mb-6'>
        <ItemInput handleOnChange={handleOnChange} htmlFor='email' id='email' label='Email' name='email' placeholder='email@gmail.com' type='email' value={dataUser.email} />
        <ItemInput handleOnChange={handleOnChange} htmlFor='name' id='name' label='Nombre y Apellido' name='name' placeholder='Nombre Apellido' type='text' value={dataUser.name} />
        <ItemInput handleOnChange={handleOnChange} htmlFor='tel' id='tel' label='Tel' name='tel' placeholder='123 456 7896' type='text' value={dataUser.tel} />
        <div className='mb-6'>
          <label className='block mb-2 text-md font-medium text-white' htmlFor='message'>Mensaje</label>
          <textarea required className='bg-gray-100 border border-gray-300 text-primary-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' id='message' name='message' placeholder='Mensaje...' rows={4} value={dataUser.message} onChange={handleOnChange} />
        </div>
        <Button content='Enviar' cssProps='w-full' onClick={() => console.log('enviar')} />
      </form>
      <p className='mb-2 text-sm text-white'>
        <a className='hover:underline' href='#'>ventas@dycsa.com.ar</a>
      </p>
    </div>
  )
}

export default Form
