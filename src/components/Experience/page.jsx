'use client'

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
      <h2 className=' font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-32 w-full text-center dark:text-light'>Education</h2>
    </div>
    
    <div ref={ref} className='   w-[100%] md:w-[75%]  mx-auto relative '>
      <motion.div style={{scaleY:scrollYProgress}} className=' absolute left-9 lg:left-[4.5rem] top-0     w-[4px] h-full bg-dark origin-top dark:bg-primaryDark '/>

      <ul className=' w-full flex flex-col  xs:ml-4 ml-8    dark:text-light  '>
        <Details  type={'Intermediate in Computer Science'} time={'2019-2020'} place={'Kips College, Faisalabad'} info={"I pursued my Computer Science studies at KIPS College, where I embarked on a journey to delve into the intricacies of the digital realm. During my time at KIPS, I immersed myself in the world of algorithms, programming languages, and software development methodologies. Through comprehensive coursework and hands-on projects, I gained a solid foundation in coding, problem-solving, and software design. The college's nurturing environment and dedicated faculty further fueled my passion for technology and equipped me with the skills needed to excel in the ever-evolving field of Computer Science"} />
        
        <Details  type={'Bachelors in Software Engineering'} time={'2020-2024'} place={'Riphah International University Faisalabad'} info={'Let me share with you my journey of acquiring a degree in Software Engineering from Riphah International University. During my time at Riphah, I embarked on a transformative educational voyage that encompassed the diverse facets of software development. Through a comprehensive curriculum, I delved into programming languages, software architecture, database management, and project management methodologies.'} />
        

        <Details  type={'Seerhat Software House'} time={'2024'} place={'Software Software House D Ground Faisalabad'} info={"Let me share my experience with you regarding the web development course I undertook at TechXtent Software House. This course was a transformative journey that enhanced my skills and knowledge in the realm of web development.Through the guidance of experienced instructors, I delved into various aspects of web development, including frontend and backend technologies, responsive design principles, and interactive user experiences. The course provided me with practical insights into the latest industry trends, best practices, and tools used in the field I honed my abilities in HTML, CSS, JavaScript,and explored frameworks like React js for frontend development. On the backend, I gained proficiency in server-side scripting languages like Node.js and databases like Mongo DB."} />
        
      
        




      </ul>
    </div>
    

    
    
    </>
  )
}

export default Experience