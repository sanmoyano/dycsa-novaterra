import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

import Form from '@/components/presentational/form'

export type DataUser = {
  email:string
  name:string
  tel:number | string
  message:string
  project:string
}

const FormContainer = () => {
  const [userData, setUserData] = useState<DataUser>({ email: '', name: '', tel: '', message: '', project: 'Casa Grande' })
  const formRef = useRef<HTMLFormElement>(null)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target

    setUserData({
      ...userData,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (formRef.current) {
      emailjs.sendForm('service_yba6xhe', 'template_q1o5eid', formRef.current, 'vLtM8eceeORp1ga_n')
        .then((res) => {
          console.log(res.status)
          toast.success('Mensaje enviado', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: 'colored'
          })
        }, (err) => {
          console.log(err.text)
          toast.error('Error al enviar mensaje', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: 'colored'
          })
        })
    }

    setUserData({ ...userData, email: '', name: '', tel: '', message: '' })
  }

  const isDisabled = userData.email === '' || userData.name === '' || userData.tel === '' || userData.message === ''

  return (
    <Form dataUser={userData} formRef={formRef} handleOnChange={handleOnChange} isDisabled={isDisabled} submit={handleSubmit} />
  )
}

export default FormContainer
