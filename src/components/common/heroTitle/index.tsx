import React from 'react'

type TitleProps = {
  content:string,
  span?:string
  cssProps?:string
}
const HeroTitle: React.FC<TitleProps> = ({ content, span, cssProps }) => {
  return (
    <h1 className={`font-bold text-white text-4xl lg:text-6xl xl:text-7xl w-fit ${cssProps}`}>
      {content}
      {/* <span className='font-bold'>{span}</span> */}
    </h1>
  )
}

export default HeroTitle
