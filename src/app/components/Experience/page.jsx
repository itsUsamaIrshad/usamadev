import React, { useRef } from 'react'
import {motion, useScroll } from 'framer-motion'
import LiIcon from '../LiIcon/page'
const Experience = () => {

  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start']
  })

  const Details = ({ type, time , place, info})=>
  {
    return <li ref={ref} className='my-8 ml-12 first:mt-0 last:mb-0  w-[80%] sm:w-[80%] lg:w-[60%] mx-auto  flex flex-col items-center justify-between'>
      <LiIcon reference={ref}/>
      <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:'spring'}}>
        <h3 className=' capitalize font-bold text-2xl dark:text-primaryDark'>{type}&nbsp; </h3>
        <span className=' capitalize font-medium text-dark/75 dark:text-primaryDark'>{time} | {place}</span>
        <p className=' font-medium w-full'>{info}</p>
      </motion.div>
    </li>
  }





  return (
    <>
    
    <div className=' my-64 '>
      <h2 className=' font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-32 w-full text-center dark:text-light'>Education</h2>
    </div>
    
    <div ref={ref} className=' w-[100%] md:w-[75%] mx-auto relative '>
      <motion.div style={{scaleY:scrollYProgress}} className=' absolute left-9 top-0     w-[4px] h-full bg-dark origin-top dark:bg-primaryDark '/>

      <ul className=' w-full flex flex-col items-start justify-between ml-4   dark:text-light  '>
        <Details  type={'Bachelor Of Science In Computer Science'} time={'2016-2020'} place={'Massachusetts Institute Of Technology (MIT)'} info={'Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.'} />
        
        <Details  type={'Bachelor Of Science In Computer Science'} time={'2016-2020'} place={'Massachusetts Institute Of Technology (MIT)'} info={'Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.'} />
        

        <Details  type={'Bachelor Of Science In Computer Science'} time={'2016-2020'} place={'Massachusetts Institute Of Technology (MIT)'} info={'Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.'} />
        
        <Details  type={'Bachelor Of Science In Computer Science'} time={'2016-2020'} place={'Massachusetts Institute Of Technology (MIT)'} info={'Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.'} />
        




      </ul>
    </div>
    

    
    
    </>
  )
}

export default Experience