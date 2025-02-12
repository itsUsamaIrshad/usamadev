import React from 'react'
import { motion } from 'framer-motion'
 const AnimatedText = ({classname , text}) => {


    const quote = {
        initial:{
            opacity:1,
        },
        animate:{
            opacity:1,
            transition:{
                 delay:0.5,
                 staggerChildren:0.08,
            }
        }
    }

    const singleWord = {
        initial:{
            opacity:0,
            y:50,
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
                 duration:1
            }
        }
    }


  return (
    <div className="w-[100%] mx-auto  py-0 flex   justify-center lg:justify-start overflow-hidden">
   
<motion.h1 className={` text-dark text-center md:text-start  dark:text-light font-bold text-4xl
     md:leading-[60px]  sm:text-5xl xl:text-6xl ' ${classname}`} variants={quote} initial='initial' animate='animate'>
{
    text.split(' ').map((word , index)=>
    (
        <motion.span variants={singleWord} key={word +'-'+ index} className=' inline-block'>
            {word}&nbsp;
        </motion.span>
    ))

    }
    </motion.h1>
    </div>
  )
}


export default AnimatedText