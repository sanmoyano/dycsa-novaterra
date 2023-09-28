import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className='flex flex-col justify-center w-full bg-gradient-to-t from-[rgba(0,0,0,.5)] to-transparent'>
      <div className='w-1/2 h-full px-3.5 py-8 sm:px-8 md:p-12 xl:p-24'>
        <form action='#' className='mb-6'>
          <div className='mb-6'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' htmlFor='email'>Email</label>
            <input required className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id='email' placeholder='name@company.com' type='email' />
          </div>
          <div className='mb-6'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' htmlFor='subject'>Subject</label>
            <input required className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id='subject' placeholder='Let us know how we can help you' type='text' />
          </div>
          <div className='mb-6'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' htmlFor='message'>Mensaje</label>
            <textarea className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id='message' placeholder='Your message...' rows={4} />
          </div>
          <button className='text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block' type='submit'>Enviar</button>
        </form>
        <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
          <a className='hover:underline' href='#'>info@company.com</a>
        </p>
        <p className='text-sm text-gray-500 dark:text-gray-400'>
          <a className='hover:underline' href='#'>212-456-7890</a>
        </p>
      </div>
    </div>
  )
}

export default Footer
