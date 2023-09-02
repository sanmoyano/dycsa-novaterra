import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <div className='h-fit w-fit'>
      <Link href='/'>
        <Image alt='Dycsa - Desarrolla, Comercializa y Entrega' height={50} src='/logo/dycsa-logo.svg' width={100} />
      </Link>
    </div>
  )
}

export default Logo
