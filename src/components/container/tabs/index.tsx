'use client'
import React, { useState } from 'react'
import { StaticImageData } from 'next/image'

import Tabs from '@/components/presentational/tabsList'

import complejoImg from '../../../../public/images/tab-complejo-casa-grande.jpg'
import deptoImg from '../../../../public/images/tab-depto-casa-grande.jpg'
import amenitiesImg from '../../../../public/images/tab-amenities-casa-grande.jpg'

type Dato = {
  dato:string
  number:number
}
export interface ITabsInfo {
  tab:string
  title:string
  description:string
  img:StaticImageData,
  alt:string
  datos:Dato[]
}

const tabs: ITabsInfo[] = [
  {
    tab: 'Complejo',
    title: 'El complejo, el lugar en el que vas a vivir',
    description: 'En una ubicación privilegiada entre la avenida Laplace y la Barranca del Río Suquía, se encuentran nuestras dos torres en un predio de 13,000m².  El mismo cuenta con cocheras privadas, suites de cortesía y espacios verdes con vegetación autóctona. Nuestro imponente hall de ingreso te da la bienvenida.',
    img: complejoImg,
    alt: 'Dycsa - Vista aera del complejo, cancha de tenis, playa de estacionamiento y pileta.',
    datos: [
      {
        dato: 'PRIMER DATO',
        number: 12
      },
      {
        dato: 'SEGUNDO DATO',
        number: 86
      },
      {
        dato: 'TERCER DATO',
        number: 123
      }
    ]
  },
  {
    tab: 'Departamentos',
    title: 'Semipisos, A tu altura',
    description: 'Arquitectura diseñada para el disfrute y la comodidad. Cada metro cuadrado está concebido para mejorar tu calidad de vida. Carpintería exterior de alta eficiencia, terrazas con área de parrilla, aire acondicionado centralizado de vanguardia, y calefacción por radiadores',
    img: deptoImg,
    alt: 'Dycsa - Interior del departamento, sala de estar o living vidreado con vista al estadio',
    datos: [
      {
        dato: 'PRIMER DATO',
        number: 12
      },
      {
        dato: 'SEGUNDO DATO',
        number: 86
      },
      {
        dato: 'TERCER DATO',
        number: 123
      }
    ]
  },
  {
    tab: 'Amenities',
    title: 'Aprovechá al máximo las prestaciones',
    description: 'Todos nuestros espacios comunes están diseñados para maximizar tu satisfacción y mejorar tu calidad de vida. Nuestras instalaciones incluyen un gimnasio, sauna, cavas y espacio de guardado, asadores al aire libre, un circuito aeróbico y un mini cine. ',
    img: amenitiesImg,
    alt: 'Dycsa - Persona ejercitando en el gimnasio con vista a la pileta',
    datos: [
      {
        dato: 'PRIMER DATO',
        number: 12
      },
      {
        dato: 'SEGUNDO DATO',
        number: 86
      },
      {
        dato: 'TERCER DATO',
        number: 123
      }
    ]
  }
]

const TabsContainer = () => {
  const [activeTab, setActiveTab] = useState<number>(0)

  const handleActiveTab = (index:number) => {
    setActiveTab(index)
  }

  return (
    <Tabs activeTab={activeTab} handleActiveTab={handleActiveTab} tabs={tabs} />
  )
}

export default TabsContainer
