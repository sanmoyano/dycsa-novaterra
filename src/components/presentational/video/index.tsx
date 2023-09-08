import React from 'react'
import Link from 'next/link'

import { VideoProps } from '@/components/container/listVideo'

const VideoItem: React.FC<VideoProps> = ({ icon, title, description, link }) => {
  return (
    <div className='flex flex-col text-primary-100 items-center h-[200px] w-full lg:h-[250px] justify-center md:items-start lg:justify-between xl:justify-center space-y-2'>
      <svg className='w-8 h-8' fill='none' stroke='currentColor' strokeWidth={1.5} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        {icon}
      </svg>
      <h3 className='text-primary-100 text-xl font-bold leading-5'>{title}</h3>
      <p className='text-primary-300 text-center md:text-left'>{description}</p>
      <div className='flex flex-row w-full items-center justify-center md:justify-start space-x-1 text-primary-100'>
        <svg className='w-6 h-6' fill='none' stroke='currentColor' strokeWidth={1.5} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path d='M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
        <Link href={link} target='_blank'><p className='text-sm underline-text before:bg-primary-100 font-bold before:h-0.5'>Ver video</p></Link>
      </div>
    </div>
  )
}

export default VideoItem
