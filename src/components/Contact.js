import React, { useRef, useState } from 'react'
import Button from './layouts/Button'
import Input from './layouts/Input'

import { MdSend } from 'react-icons/md'
import emailjs from '@emailjs/browser';

const Result = () => {
  return (
    <p className='text-green-500 text-center text-lg'>Your messeage has been successfully sent, I will contact you soon.</p>
  )
}

function Contact() {

  const form = useRef();

  const [result, setResult] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tm0jl2d', 'template_7eog32h', form.current, 'nbxhOn7y1o_8cwHgc')
      .then((result) => {
        console.log(result.text);
        e.target.reset()
        setResult(true)
        console.log(e.target.reset());
      }, (error) => {
        console.log(error.text);
      });
  };

  setTimeout(() => {
    setResult(false)
  }, 5000)

  return (
    <div id='contact' className='min-h-screen py-10 sm:pb-12'>
      <p className='text-center text-3xl font-semibold'>Contact Me</p>
      <p className='text-center text-sm text-slate-400'>Get in touch</p>
      <div className='w-full p-4 flex justify-center items-center'>
        <form className='w-80 mt-5' onSubmit={sendEmail} ref={form}>
          <Input name='form_name' label='Name' type='text' />
          <Input name='form_email' label='Email' type='email' />
          <div className='w-full mb-4 relative'>
            <textarea name="form_textarea"
              className='min-w-full max-w-full min-h-[250px] max-h-[315px] border-2 border-cyan-900 p-2 rounded-md outline-none'
              placeholder='Write your messeage here....'
            ></textarea>
          </div>
          <Button
            text='Contact Me'
            icon={<MdSend className='icon p-0 m-0 fill-cyan-500 inline ml-2'/>}
          ></Button>
          <div className='mt-2'>{result ? <Result /> : null}</div>
        </form>
      </div>
    </div>
  )
}

export default Contact