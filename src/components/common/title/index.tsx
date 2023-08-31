import React from 'react'

type TitleProps = {
  content:string
}
const HeroTitle = ({ content }: TitleProps) => {
  return (
    <p className='font-bold text-white text-4xl md:text-6xl lg:text-8xl w-full md:w-[70%] lg:w-[50%]'>{content}</p>
  )
}

export default HeroTitle
