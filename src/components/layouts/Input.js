import React from 'react'

const Input = ({ label, type, name }) => {
  return (
    <div className='w-full mb-4 relative'>
      <input
        placeholder={label}
        name={name}
        type={type}
        className='w-full outline-none border-2 border-cyan-900 p-2 rounded-md' />
    </div>
  )
}

export default Input