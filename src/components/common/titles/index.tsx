import React from 'react'

type titleProps = {
  content: string
  cssProps?:string
}

const Title: React.FC<titleProps> = ({ content, cssProps }) => {
  return (
    <h2 className={`text-primary-100 text-2xl md:text-4xl font-bold ${cssProps}`}>{content}</h2>
  )
}

export default Title
