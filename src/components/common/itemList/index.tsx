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
      <svg className='w-6 h-6' fill={!stroke ? 'currentColor' : ''} stroke={stroke ? 'currentColor' : ''} strokeWidth={stroke ? '1.5' : ''} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        {icon}
      </svg>
      <p className='text-xs xl:text-sm w-fit'>{info}</p>
    </li>
  )
}

export default ItemList
