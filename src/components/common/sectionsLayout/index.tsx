import React from 'react'

type Props = {
  children: React.ReactNode
}

const SectionsLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='bg-white'>
      {children}
    </div>
  )
}

export default SectionsLayout
