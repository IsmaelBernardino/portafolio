import React from 'react'
import personalImg from '../asset/foto.png'
import Button from './layouts/Button'
import CV from '../asset/IsmaelBernardinoCV.pdf'

import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { TiDocumentText } from 'react-icons/ti'
import { MdSend } from 'react-icons/md'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

function Home() {


  return (
    <div id='home' className='py-10 sm:py-12 relative'>
      <div>
        <div className='text-center py-5 overflow-hidden'>
          <motion.p
            initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, duration: 1 }}
          >Hello,  I'm</motion.p>
          <motion.p className='capitalize font-semibold text-3xl'
            initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.5, duration: 1.5 }}
          >Abdalan Ismael</motion.p>
          <motion.p className='text-slate-400'
            initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 2, duration: 2 }}
          >Web Developer</motion.p>
        </div>
        <div className='flex justify-center gap-2 mb-4'>
          <Link to='contact' spy={true} smooth={true} offset={0} duration={800} activeClass="active" className='nav_icon'>
            <Button
              text='Contact Me'
              icon={<MdSend className='icon p-0 m-0 stroke-cyan-500 inline ml-2' />}
            ></Button>
          </Link>
          <a href={CV} target='_blank' rel="noreferrer">
            <Button
              text='Download CV'
              icon={<TiDocumentText className='icon p-0 m-0 stroke-cyan-500 inline ml-2' />}
            ></Button>
          </a>
        </div>
        <div className='flex justify-center'>
          <div className='bg-gradient-to-b from-cyan-500 to-slate-900 rounded-t-full p-6'>
            <img src={personalImg} alt='personal foto' className='w-48' />
          </div>
        </div>
      </div>
      <div className='flex justify-center gap-5 mt-4 sm:flex-col sm:absolute left-1/4 top-1/3' >
        <a href='https://www.linkedin.com/in/ismael-bernardino-922083218/' target='_blank' rel="noreferrer" >
          <FiLinkedin className='text-2xl stroke-cyan-500 md:hover:scale-125 hover:duration-500' />
        </a>
        <a href='https://github.com/IsmaelBernardino' target='_blank' rel="noreferrer" >
          <FiGithub className='text-2xl stroke-cyan-500 md:hover:scale-125 hover:duration-500' />
        </a>
      </div>
    </div>
  )
}

export default Home