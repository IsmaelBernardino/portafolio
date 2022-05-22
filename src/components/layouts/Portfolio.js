import React, { useRef, useState, useEffect } from 'react'
import images from './Images'

import { motion } from 'framer-motion'

const Portfolio = () => {

  const [width, setWidth] = useState(0);

  const Slider = useRef()

  useEffect(() => {
    setWidth(Slider.current.scrollWidth - Slider.current.offsetWidth)
  }, [])


  return (
    <>
      <motion.div ref={Slider} className='cursor-grab overflow-hidden max-w-md mt-5 mx-5 p-3 sm:mx-auto shadow-lg shadow-slate-400' whileTap={{ cursor: 'grabbing' }}>
        <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='flex gap-3'>
          {images.map(image => {
            return (
              <motion.div className='min-h-[20rem] min-w-[95%] md:min-w-[75%] p-2 bg-cyan-900 rounded-3xl' key={image.key}>
                <img src={image.url} alt='' className='w-full h-1/3 rounded-3xl pointer-events-none' />
                <div className='w-full p-4 text-white'>
                  <p className='font-semibold'>{image.name}</p>
                  <p className='mb-5 text-slate-400 '>{image.description}</p>
                  <a href={image.git} target='_blank' rel="noreferrer" className='border-2 border-solid border-cyan-500 rounded-lg p-2 text-cyan-500 mr-4' >Github</a>
                  {image.gitlink !== '' ? <a href={image.gitlink} target='_blank' rel="noreferrer" className='border-2 border-solid border-cyan-500 rounded-lg p-2 text-cyan-500' >Live demo</a> : null}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </>
  )
}

export default Portfolio