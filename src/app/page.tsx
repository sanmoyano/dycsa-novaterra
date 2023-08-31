'use client'
import Button from '@/components/common/button'

export default function Home () {
  return (
    <div className='flex flex-col p-10'>
      <p className='font-thin'>Dycsa - Casa Grande Laplace</p>
      <p className='font-normal'>Dycsa - Casa Grande Laplace</p>
      <p className='font-bold'>Dycsa - Casa Grande Laplace</p>
      <div>
        <Button content='Conoce más' onClick={() => console.log('hola')} />
        <Button transparent content='Conoce más' onClick={() => console.log('hola')} />
      </div>
    </div>
  )
}
