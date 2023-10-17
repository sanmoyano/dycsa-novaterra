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

  return (
    <Form dataUser={userData} />
  )
}

export default FormContainer
