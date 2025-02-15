'use client'

import React, { useRef } from 'react'
import {motion, useScroll } from 'framer-motion'
import LiIcon from '../LiIcon/page'
const Education = () => {

  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start']
  })

  const Details = ({ type, time , place, info})=>
  {
    return <li ref={ref} className='my-8  first:mt-0 last:mb-0  w-[80%] lg:w-[80%] mx-auto  flex flex-col items-center justify-center'>
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
    
    <div className=' my-32 sm:ml-14 '>
      <h2 className=' font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-32 w-full text-center dark:text-light'>Experience</h2>
    </div>
    
    <div ref={ref} className='   w-[100%] md:w-[75%]  mx-auto relative '>
      <motion.div style={{scaleY:scrollYProgress}} className=' absolute left-9 lg:left-[4.5rem] top-0     w-[4px] h-full bg-dark origin-top dark:bg-primaryDark '/>

      <ul className=' w-full flex flex-col  xs:ml-4 ml-8    dark:text-light  '>
       
      <Details  type={'Techxtents'} time={'2024'} place={'TechXtent Software House Kohinoor Faisalabad'} info={"Let me share my experience with you regarding the web development course I undertook at TechXtent Software House. This course was a transformative journey that enhanced my skills and knowledge in the realm of web development.Through the guidance of experienced instructors, I delved into various aspects of web development, including frontend and backend technologies, responsive design principles, and interactive user experiences. The course provided me with practical insights into the latest industry trends, best practices, and tools used in the field I honed my abilities in HTML, CSS, JavaScript,and explored frameworks like React js for frontend development. On the backend, I gained proficiency in server-side scripting languages like Node.js and databases like Mongo DB."} />
        
      <Details  type={'KOODICT'} time={'2024'} place={'KOODICT Software House Kohinoor Faisalabad'} info={"Let me share my experience with you regarding the web development course I undertook at KOODICT Software House. This course was a transformative journey that enhanced my skills and knowledge in the realm of web development.Through the guidance of experienced instructors, I delved into various aspects of web development, including frontend and backend technologies, responsive design principles, and interactive user experiences. The course provided me with practical insights into the latest industry trends, best practices, and tools used in the field I honed my abilities in HTML, CSS, JavaScript,and explored frameworks like React js for frontend development. On the backend, I gained proficiency in server-side scripting languages like Node.js and databases like Mongo DB."} />
        
      <Details  type={'SOFRIX'} time={'2024'} place={'SOFRIX Software House Satyana Road, Faisalabad'} info={"Let me share my experience with you regarding the web development course I undertook at SOFRIX Software House. This course was a transformative journey that enhanced my skills and knowledge in the realm of web development.Through the guidance of experienced instructors, I delved into various aspects of web development, including frontend and backend technologies, responsive design principles, and interactive user experiences. The course provided me with practical insights into the latest industry trends, best practices, and tools used in the field I honed my abilities in HTML, CSS, JavaScript,and explored frameworks like React js for frontend development. On the backend, I gained proficiency in server-side scripting languages like Node.js and databases like Mongo DB."} />
        
      
    
        




      </ul>
    </div>
    

    
    
    </>
  )
}

export default Education