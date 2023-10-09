import React from 'react'

type ButtonProps = {
  content?: string
  onClick?: () => void
  transparent?: boolean
  icon?: React.ReactNode
  cssProps?:string
  index?:number
}

const Button = ({ content, onClick, transparent, icon, cssProps, index }: ButtonProps) => {
  return (
    <button className={`${!transparent ? 'bg-secondary-100 hover:bg-secondary-200 shadow-lg' : 'bg-transparent hover:bg-gray-200 hover:border-white'} text-white border border-transparent font-normal py-2 px-2 rounded transition-all duration-500 h-fit w-fit ${cssProps} flex items-center justify-center`} onClick={onClick}>
      <div className='flex flex-row items-center justify-center space-x-2'>
        {content && (
          <span>{content}</span>
        )}
        {
        icon && (
          <span className='flex items-center justify-center'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' strokeWidth={1.5} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              {icon}
            </svg>
          </span>
        )
      }
      </div>
    </button>
  )
}

export default Button
