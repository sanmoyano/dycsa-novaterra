import { StaticImageData } from 'next/image'
import React from 'react'

import Planimetria from '@/components/presentational/planimetria'

import complejoImg from '../../../../public/images/tab-complejo-casa-grande.jpg'
import torreSuquiaImg from '../../../../public/images/torre-suquia-casa-grande.jpg'
import torreLaplaceImg from '../../../../public/images/torre-laplace-casa-grande.jpg'

export interface IPlanimetriasProps {
  img:StaticImageData
  title:string
  datos:string[]
}

const planimetrias: IPlanimetriasProps[] = [
  {
    img: complejoImg,
    title: 'Complejo',
    datos: ['2 Torres en un predio de 13.000m2', 'Cocheras privadas dobles en subsuelo con 1 baulera', '29 estacionamientos para visitas', 'Espacios verdes con preservación de vegetación', 'iluminacion con control horario y fotocélulas']
  },
  {
    img: torreSuquiaImg,
    title: 'Torre Suquia',
    datos: ['Imponente Hall central de ingreso', 'Espacios de lectura en el Hall', '8 pisos de departamentos', ' 1, 2 y 3 dormitorios desde 115m2 hasta 370m2']
  },
  {
    img: torreLaplaceImg,
    title: 'Torre Laplace',
    datos: ['Frente imponente de 60 metros sobre Avenida Laplace', '2 pisos de departamentos', 'Locales comerciales con parking en planta baja']
  }
]

const PlanimetriasContainer:React.FC = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 justify-center gap-6 pt-10'>
      {planimetrias.map((item, index) => (
        <Planimetria key={index} datos={item.datos} img={item.img} title={item.title} />
      ))}
    </div>
  )
}

export default PlanimetriasContainer
