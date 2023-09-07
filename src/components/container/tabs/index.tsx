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
    description: 'Lorem ipsum dolor sit amet consectetur. Nullam velit cras molestie elit sem et gravida quis sodales. Nisl nunc odio pellentesque velit.',
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
    description: 'Lorem ipsum dolor sit amet consectetur. Nullam velit cras molestie elit sem et gravida quis sodales. Nisl nunc odio pellentesque velit.',
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
    description: 'Lorem ipsum dolor sit amet consectetur. Nullam velit cras molestie elit sem et gravida quis sodales. Nisl nunc odio pellentesque velit.',
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
