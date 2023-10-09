import React from 'react'

type InfoProps = {
  info:string
  cssProps:string
  icon: React.ReactNode
  stroke?:boolean
}

const ItemList: React.FC<InfoProps> = ({ info, cssProps, icon, stroke }) => {
  return (
    <li className={`flex flex-row ${cssProps} w-1/2 items-center space-x-4`}>
      <svg className='w-6 h-6' fill='none' stroke='currentColor' strokeWidth={1.5} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        {icon}
      </svg>
      <p className='text-xs xl:text-lg w-fit'>{info}</p>
    </li>
  )
}

export default ItemList
