import React from 'react'

type SectionProps = {
  children: React.ReactNode
  id?:string
}

const Section: React.FC<SectionProps> = ({ children, id }) => {
  return (
    <section className=' p-3.5 md:p-6 lg:p-12' id={id}>
      {children}
    </section>
  )
}

export default Section
