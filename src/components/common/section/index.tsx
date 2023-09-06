import React from 'react'

type SectionProps = {
  children: React.ReactNode
  id?:string
}

const Section: React.FC<SectionProps> = ({ children, id }) => {
  return (
    <section className='p-3.5 md:p-8 lg:p-12 min-[1400px]:mx-12 min-[1500px]:mx-24 min-[1700px]:mx-48' id={id}>
      {children}
    </section>
  )
}

export default Section
