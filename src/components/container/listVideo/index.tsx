import React from 'react'

import VideoItem from '@/components/presentational/video'

export interface VideoProps {
  icon:React.ReactNode
  title:string
  description:string
  link:string
}

const videos: VideoProps[] = [
  {
    icon: <path d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' strokeLinecap='round' strokeLinejoin='round' />,
    title: 'Condominio de categoría',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ipsum esse sapiente ullam doloremque deserunt.',
    link: 'https://www.youtube.com/watch?v=s6i1Kb04JjU&t=1s'
  },
  {
    icon: <path d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' strokeLinecap='round' strokeLinejoin='round' />,
    title: 'Viví la experiencia',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ipsum esse sapiente ullam doloremque deserunt.',
    link: 'https://www.youtube.com/watch?v=MI7LWm2qhyQ&t=1s'
  },
  {
    icon: <path d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' strokeLinecap='round' strokeLinejoin='round' />,
    title: 'Resumen de la experiencia',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ipsum esse sapiente ullam doloremque deserunt.',
    link: 'https://www.youtube.com/watch?v=mvZxqHSceEQ'
  },
  {
    icon: <path d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' strokeLinecap='round' strokeLinejoin='round' />,
    title: 'Accedé al paraíso',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ipsum esse sapiente ullam doloremque deserunt.',
    link: 'https://www.youtube.com/watch?v=xGPzTQ3g5wk'
  }
]

const VideosContainer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'>
      {videos.map((video, index) => (
        <VideoItem key={index} {...video} />
      ))}
    </div>
  )
}

export default VideosContainer
