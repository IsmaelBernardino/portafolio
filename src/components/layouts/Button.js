import React from 'react'

const Button = (props) => {
  return (
    <>
      <button className='w-36 py-2 px-3 border-2 border-cyan-500 rounded-lg mt-2 text-cyan-500 block cursor-pointer text-sm  md:active:scale-95'>
        {props.text}{props.icon}
      </button>
    </>
  )
}

export default Button