import React from 'react'

import { BsPatchCheck } from 'react-icons/bs'

const Skills = (props) => {
  return (
    <div className='flex items-start gap-3'>
      <BsPatchCheck className='text-cyan-500 text-2xl' />
      <div>
        <p className='text-white'>{props.skill}</p>
        <p className='text-slate-400 text-sm'>{props.level}</p>
      </div>
    </div>
  )
}

export default Skills