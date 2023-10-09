import React from 'react'

type InfoProps = {
  info:string
  cssProps:string
  icon: React.ReactNode
  stroke?:boolean
}

const ItemList: React.FC<InfoProps> = ({ info, cssProps, icon, stroke }) => {
  return (
    <li className={`flex flex-row ${cssProps} w-full items-center space-x-1`}>
      <svg className='w-8 h-8' fill='none' stroke='currentColor' strokeWidth={1.5} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        {icon}
      </svg>
      <p className='text-xs xl:text-lg w-fit'>{info}</p>
    </li>
  )
}

export default ItemList
