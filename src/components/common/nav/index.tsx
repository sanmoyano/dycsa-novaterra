import React from 'react'
import Link from 'next/link'

type NavProps = {
  url:string
  content:string
  props?:React.AnchorHTMLAttributes<HTMLAnchorElement>
}

const NavItem: React.FC<NavProps> = ({ url, content, props }) => {
  return (
    <Link href={url} {...props}>
      <span className='underline-text text-lg'>{content}</span>
    </Link>
  )
}

export default NavItem
