import React from 'react'

type TitleProps = {
  content:string,
  span:string
  cssProps?:string
}
const HeroTitle: React.FC<TitleProps> = ({ content, span, cssProps }) => {
  return (
    <h1 className={`font-normal text-white text-4xl md:text-6xl lg:text-8xl w-fit ${cssProps}`}>
      {content}
      <span className='font-bold'>{span}</span>
    </h1>
  )
}

export default HeroTitle
