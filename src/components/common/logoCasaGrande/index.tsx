import React from 'react'
import Image from 'next/image'
type LogoProps = {
  logo:string
  visible?:boolean
  width:number
  heigth:number
}

const LogoCasaGrande: React.FC<LogoProps> = ({ logo, visible, width, heigth }) => {
  return (
    <div className='flex flex-col justify-center md:flex-row w-fit md:space-x-4 pt-2 items-center'>
      <h2 className={`${visible ? 'text-2xl text-primary-100 leading-7' : 'hidden'}`}>Viví en modo <br /><span className='font-bold'>Casagrande</span></h2>
      <Image
        alt='Dycsa - Casa Grande Laplace'
        height={heigth}
        src={logo}
        style={{ height: heigth, width }}
        width={width}
      />
    </div>
  )
}

export default LogoCasaGrande
