'use client'
import React, { useState } from 'react'
import { StaticImageData } from 'next/image'

import Tabs from '@/components/presentational/tabs'

import complejoImg from '../../../../public/images/tab-complejo-casa-grande.jpg'
import deptoImg from '../../../../public/images/tab-depto-casa-grande.jpg'
import amenitiesImg from '../../../../public/images/tab-amenities-casa-grande.jpg'

export interface ITabsInfo {
  tab:string
  title:string
  description:string
  img:StaticImageData
}

const tabs: ITabsInfo[] = [
  {
    tab: 'Complejo',
    title: 'El complejo, el lugar en el vas a vivir',
    description: 'Lorem ipsum dolor sit amet consectetur. Nullam velit cras molestie elit sem et gravida quis sodales. Nisl nunc odio pellentesque velit. In commodo eu aenean sem.',
    img: complejoImg
  },
  {
    tab: 'Departamentos',
    title: 'Semipisos, A tu altura',
    description: 'Lorem ipsum dolor sit amet consectetur. Nullam velit cras molestie elit sem et gravida quis sodales. Nisl nunc odio pellentesque velit. In commodo eu aenean sem.',
    img: deptoImg
  },
  {
    tab: 'Amenities',
    title: 'Aprovechá al máximo las prestaciones',
    description: 'Lorem ipsum dolor sit amet consectetur. Nullam velit cras molestie elit sem et gravida quis sodales. Nisl nunc odio pellentesque velit. In commodo eu aenean sem.',
    img: amenitiesImg
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
