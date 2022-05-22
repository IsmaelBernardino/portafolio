import React from 'react'
import Skills from './layouts/Skills'

function Skill() {
  return (
    <div id='skill' className='w-full min-h-screen py-10 md:min-h-full'>
      <p className='text-center text-3xl font-semibold sm:mb-5'>My Skills</p>
      <div className='flex flex-wrap sm:justify-center mt-4 gap-3'>
        <div className='bg-cyan-900 w-11/12 md:w-2/6 m-auto sm:m-0 rounded-2xl p-6'>
          <p className='text-cyan-500 text-center text-xl'>Frontend Development</p>
          <div className='mt-4 flex gap-4 md:gap-10 justify-evenly  flex-wrap'>
            <Skills skill='HTML' level='Experienced' />
            <Skills skill='CSS' level='Experienced' />
            <Skills skill='JavaScript' level='Intermediate' />
            <Skills skill='Tailwind' level='Intermediate' />
            <Skills skill='React' level='Intermediate' />
          </div>
        </div>
        <div className='bg-cyan-900 w-11/12 md:w-2/6 m-auto sm:m-0 rounded-2xl p-6'>
          <p className='text-cyan-500 text-center text-xl'>Backend Development</p>
          <div className='mt-4 flex gap-4 md:gap-10 justify-evenly  flex-wrap'>
            <Skills skill='PHP' level='Experienced' />
            <Skills skill='Node JS' level='Intermediate' />
            <Skills skill='MySQL' level='Intermediate' />
            <Skills skill='Oracle' level='Intermediate' />
            <Skills skill='PostgreSQL' level='Intermediate' />
            <Skills skill='MongoDB' level='Intermediate' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill