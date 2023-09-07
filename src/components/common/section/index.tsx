import React from 'react'

type SectionProps = {
  children: React.ReactNode
  id?:string
}

const Section: React.FC<SectionProps> = ({ children, id }) => {
  return (
    <section className='px-3.5 py-8 md:p-12 lg:p-12 xl:p-24' id={id}>
      {children}
    </section>
  )
}

export default Section
