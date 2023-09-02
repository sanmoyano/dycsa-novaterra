import React from 'react'

type TitleProps = {
  content:string,
  span:string
}
const HeroTitle: React.FC<TitleProps> = ({ content, span }) => {
  return (
    <p className='font-normal text-white text-6xl md:text-6xl lg:text-8xl'>
      {content}
      <span className='font-bold'>{span}</span>
    </p>
  )
}

export default HeroTitle
