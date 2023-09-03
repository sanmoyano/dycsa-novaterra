'use client'
import React, { useState } from 'react'
import { StaticImageData } from 'next/image'

import Tabs from '@/components/presentational/tabsList'

import complejoImg from '../../../../public/images/tab-complejo-casa-grande.jpg'
import deptoImg from '../../../../public/images/tab-depto-casa-grande.jpg'
import amenitiesImg from '../../../../public/images/tab-amenities-casa-grande.jpg'

export interface ITabsInfo {
  tab:string
  title:string
  description:string
  img:StaticImageData,
  alt:string
}

const tabs: ITabsInfo[] = [
  {
    tab: 'Complejo',
    title: 'El complejo, el lugar en el vas a vivir',
    description: 'Lorem ipsum dolor sit amet consectetur. Nullam velit cras molestie elit sem et gravida quis sodales. Nisl nunc odio pellentesque velit. In commodo eu aenean sem.',
    img: complejoImg,
    alt: 'Dycsa - Vista aera del complejo, cancha de tenis, playa de estacionamiento y pileta.'
  },
  {
    tab: 'Departamentos',
    title: 'Semipisos, A tu altura',
    description: 'Lorem ipsum dolor sit amet consectetur. Nullam velit cras molestie elit sem et gravida quis sodales. Nisl nunc odio pellentesque velit. In commodo eu aenean sem.',
    img: deptoImg,
    alt: 'Dycsa - Interior del departamento, sala de estar o living vidreado con vista al estadio'
  },
  {
    tab: 'Amenities',
    title: 'Aprovechá al máximo las prestaciones',
    description: 'Lorem ipsum dolor sit amet consectetur. Nullam velit cras molestie elit sem et gravida quis sodales. Nisl nunc odio pellentesque velit. In commodo eu aenean sem.',
    img: amenitiesImg,
    alt: 'Dycsa - Persona ejercitando en el gimnasio con vista a la pileta'
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
