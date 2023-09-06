import React from 'react'

type SectionProps = {
  children: React.ReactNode
  id?:string
}

const Section: React.FC<SectionProps> = ({ children, id }) => {
  return (
    <section className='p-3.5 md:p-6 lg:p-12 lg:mx-24 min-[1700px]:mx-48' id={id}>
      {children}
    </section>
  )
}

export default Section

// min-[1700px]:
