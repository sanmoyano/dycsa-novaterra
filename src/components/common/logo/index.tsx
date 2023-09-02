import React from 'react'
import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <div className='h-fit w-fit'>
      <Image alt='Dycsa - Desarrolla, Comercializa y Entrega' height={50} src='/logo/dycsa-logo.svg' width={100} />
    </div>
  )
}

export default Logo
