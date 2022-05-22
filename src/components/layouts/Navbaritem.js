import React from 'react'
import { Link } from 'react-scroll'

const Navbaritem = ({ goto, size, icon}) => {
  return (
    <>
      <Link to={goto} spy={true} smooth={true} offset={size} duration={500} activeClass="active" className='nav_icon'>
        {icon}
        <div className='nav_item'></div>
      </Link>
    </>
  )
}

export default Navbaritem