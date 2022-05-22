import React from 'react'
import {motion} from 'framer-motion'

import { FiHome, FiCode, FiGrid, FiSend } from 'react-icons/fi';
import Navbaritem from './layouts/Navbaritem';

function Header() {

  return (
    <>
      <motion.div className='fixed left-0 bottom-2 p-2 w-full h-16 flex justify-center items-center z-50'
      initial={{y: 500}} animate={{y: 0}} transition={{ duration: 3 }}>
        <div className='w-[350px] flex justify-evenly items-center gap-4 z-10'>
          <Navbaritem goto='home' size={0} icon={<FiHome className='icon md:hover:scale-125 hover:duration-500' />} />
          <Navbaritem goto='skill' size={0} icon={<FiCode className='icon md:hover:scale-125 hover:duration-500' />} />
          <Navbaritem goto='proyect' size={0} icon={<FiGrid className='icon md:hover:scale-125 hover:duration-500' />} />
          <Navbaritem goto='contact' size={0} icon={<FiSend className='icon md:hover:scale-125 hover:duration-500' />} />
        </div>
        <div className='absolute w-[300px] h-16 rounded-full backdrop-blur-2xl'></div>
      </motion.div>
    </>
  )
}

export default Header