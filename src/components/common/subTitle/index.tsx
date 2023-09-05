import React from 'react'

type SubTitleProps = {
  content: string
  cssProps: string
}

const SubTitle: React.FC<SubTitleProps> = ({ content, cssProps }) => {
  return (
    <h3 className={`w-fit text-sm ${cssProps}`}>{content}</h3>
  )
}

export default SubTitle
