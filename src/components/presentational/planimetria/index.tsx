import React from 'react'
import Image from 'next/image'

import ItemList from '@/components/common/itemList'
import { IPlanimetriasProps } from '@/components/container/planimetrias'

const Planimetria: React.FC<IPlanimetriasProps> = ({ datos, img, title }) => {
  return (
    <div className='flex flex-col'>
      <div className='relative w-[290px] min-[375px]:w-[350px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] min-[1792px]:w-[500px] aspect-[16/9]'>
        <Image
          fill
          alt='img'
          className='rounded-xl object-cover object-center'
          placeholder='blur'
          quality={80}
          src={img}
        />
      </div>
      <h3 className='text-primary-100 text-xl font-bold mt-4 pl-1'>{title}</h3>
      <ul className='mt-1 pl-2'>
        {datos.map((dato, index) => (
          <ItemList
            key={index}
            stroke
            cssProps='text-primary-300'
            icon={<path d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3' strokeLinecap='round' strokeLinejoin='round' />}
            info={dato}
          />
        ))}
      </ul>
    </div>
  )
}

export default Planimetria
