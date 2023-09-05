'use client'
import React, { useState } from 'react'
import { StaticImageData } from 'next/image'

import TowerCard from '@/components/presentational/towerCard'

import torreSuquiaImg from '../../../../public/images/torre-suquia-casa-grande.jpg'
import torreLaplaceImg from '../../../../public/images/torre-laplace-casa-grande.jpg'

export interface ITowersInfo {
  title:string
  description:string
  img: StaticImageData
  info:string
}

const towers: ITowersInfo[] = [
  {
    title: 'Torre Suquia',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ducimus labore distinctio nulla expedita dolorum ex cumque rerum, reiciendis delectus!',
    img: torreSuquiaImg,
    info: 'more about'
  },
  {
    title: 'Torre Laplace',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ducimus labore distinctio nulla expedita dolorum ex cumque rerum, reiciendis delectus!',
    img: torreLaplaceImg,
    info: 'more about'
  }
]

const TowersContainer = () => {
  const [isOpen, setIsOpen] = useState<boolean[]>(Array(towers.length).fill(false))

  const handleOpen = (index:number) => {
    console.log(isOpen)
    const updateIsOpen = [...isOpen]

    updateIsOpen[index] = !updateIsOpen[index]
    setIsOpen(updateIsOpen)
  }

  return (
    towers.map((tower, index) => (
      <TowerCard
        key={index}
        handleOpen={() => handleOpen(index)}
        index={index}
        isOpen={isOpen}
        {...tower}
      />
    ))
  )
}

export default TowersContainer
