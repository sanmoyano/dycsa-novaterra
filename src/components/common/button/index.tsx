import React, { JSX } from 'react'

type ButtonProps = {
  content: string
  onClick: () => void
  transparent?: boolean
  icon?: JSX.Element | string
}

const Button = ({ content, onClick, transparent, icon }: ButtonProps) => {
  return (
    <button className={`${!transparent ? 'bg-secondary-100 hover:bg-secondary-200' : 'bg-transparent hover:bg-gray-200'} text-white font-normal py-2 px-4 rounded transition-all duration-500`} onClick={onClick}>
      <span>{content}</span>
      <span>{icon}</span>
    </button>
  )
}

export default Button
