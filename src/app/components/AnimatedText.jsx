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
    <div className="w-[100%] md:w-[80%] mx-auto py-2 sm:py-0 flex items-center justify-center text-center overflow-hidden">
   
<motion.h1 className={` text-dark font-bold capitalize text-center  dark:text-light     text-4xl leading-[60px] lg:text-6xl xl:text-7xl' ${classname}`} variants={quote} initial='initial' animate='animate'>
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