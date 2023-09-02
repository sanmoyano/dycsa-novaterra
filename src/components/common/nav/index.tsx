import React from 'react'
import Link from 'next/link'

type NavProps = {
  url:string
  content:string
  props?:React.AnchorHTMLAttributes<HTMLAnchorElement>
}

const NavItem: React.FC<NavProps> = ({ url, content, props }) => {
  return (
    <li>
      <Link href={url} {...props} className='block'>
        <span aria-current='page' className='underline-text text-lg'>{content}</span>
      </Link>
    </li>
  )
}

export default NavItem
