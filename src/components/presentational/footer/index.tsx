'use client'
import React from 'react'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import HubSpotContactForm from '@/components/container/hubSpotForm'

const Footer: React.FC = () => {
  return (
    <div className='flex h-fit flex-col lg:flex-row justify-evenly w-full bg-gradient-to-t from-[rgba(3,19,51,.7)] to-transparent' id='contacto'>
      <ToastContainer />
      <HubSpotContactForm />
      {/* <FormContainer /> */}
      <div className='w-full lg:w-1/2 flex flex-col items-center justify-center lg:p-12'>
        <iframe allowFullScreen height='450' loading='lazy' referrerPolicy='no-referrer-when-downgrade' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.6105054224977!2d-64.19922682462101!3d-31.424855674257884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a27d38a7e3ef%3A0x3e036f198e13bcb7!2sAv.%20J.%20M.%20de%20Pueyrred%C3%B3n%20580%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1701904852416!5m2!1ses-419!2sar' width='auto' />
      </div>
    </div>
  )
}

export default Footer
