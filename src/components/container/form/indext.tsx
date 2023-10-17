import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import Form from '@/components/presentational/form'

export type DataUser = {
  email:string
  name:string
  tel:number | string
  message:string
}

const FormContainer = () => {
  const [userData, setUserData] = useState<DataUser>({ email: '', name: '', tel: '', message: '' })

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target

    setUserData({
      ...userData,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <Form dataUser={userData} handleOnChange={handleOnChange} />
  )
}

export default FormContainer
