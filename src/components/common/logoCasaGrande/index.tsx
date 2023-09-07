import React from 'react'
import Image from 'next/image'

const LogoCasaGrande = () => {
  return (
    <div className='flex flex-col justify-center md:flex-row w-fit md:space-x-4 pt-5 lg:pt-12 items-center'>
      <h2 className='text-2xl text-primary-100 leading-7'>Viví en modo <br /><span className='font-bold'>Casagrande</span></h2>
      <Image
        alt='Dycsa - Casa Grande Laplace'
        height={200}
        src='/logo/logo-casa-grande.svg'
        style={{ height: 200, width: 200 }}
        width={200}
      />
    </div>
  )
}

export default LogoCasaGrande
