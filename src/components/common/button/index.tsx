import React, { JSX } from 'react'

type ButtonProps = {
  content: string
  onClick: () => void
  transparent?: boolean
  icon?: JSX.Element | string
}

const Button = ({ content, onClick, transparent, icon }: ButtonProps) => {
  return (
    <button className={`${!transparent ? 'bg-secondary hover:bg-hover text-white' : 'bg-transparent hover:bg-gray text-primary'} font-bold py-2 px-4 rounded`} onClick={onClick}>
      <span>{content}</span>
      <span>{icon}</span>
    </button>
  )
}

export default Button
