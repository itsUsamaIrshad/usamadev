import React from 'react'
import { motion } from 'framer-motion'
import Layout from '../layout/page'
const Skill = () => {


  const Skills = ({name , x,y})=>
  {
    return(
  <motion.div className=' flex justify-center items-center rounded-full font-semibold bg-dark  dark:bg-light  dark:text-dark text-light p-4 md:p-8 shadow-dark cursor-pointer py-1 md:py-3 px-4 md:px-6 absolute text-sm md:text-lg' whileHover={{scale:1.05}} initial={{x:0,y:0}} whileInView={{x:x , y:y , transition:{duration:1.5}}} viewport={{once:true}} >
  {name}
</motion.div>
    )
  }


  return (
    <>
    
    
    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-64 w-full text-center mb-14  dark:text-light">Skills</h2>


    <div className='h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark bg-red-500'>

<motion.div className=' flex justify-center items-center rounded-full font-semibold bg-dark dark:bg-light dark:text-dark text-light p-8 shadow-dark cursor-pointer ' whileHover={{scale:1.05}} >
  Web
</motion.div>


<Skills name='HTML' x='-32vw' y='12vw'/>
<Skills name='CSS' x='-28vw' y='-9vw'/>
<Skills name='Tailwind CSS' x='20vw' y='6vw'/>
<Skills name='ReactJS' x='-8vw' y='12vw'/>
<Skills name='JavaScript' x='-15vw' y='-15vw'/>
<Skills name='Firebase' x='26vw' y='-10vw'/>
<Skills name='Nextjs' x='-16vw' y='-5vw'/>
<Skills name='Nodejs' x='20vw' y='-20vw'/>
<Skills name='MongoDb' x='-25vw' y='-18vw'/>
<Skills name='ExpressJS'js x='30vw' y='14vw'/>

    </div>

    
    
    
    
    
    
    
    </>
  )
}

export default Skill