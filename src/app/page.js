'use client'
import Image from 'next/image';
import profileImage from '../../public/images/profile/developer-pic-2.png'
import Link from 'next/link';
import TransitionEffect from '@/components/TransitionEffect/page';
import AnimatedText from '@/components/AnimatedText';
import HireMe from '@/components/HireMe/page';
import { LinkArrow } from '@/components/Icon/page';
import Layout from '@/components/Layout/page';
import RotatingText from '@/components/RotatingText/page'
import {  motion } from 'framer-motion';

export default function Home() {
  return (
    
    <>
   <TransitionEffect/>

    <main className=' flex items-start text-dark w-full min-h-screen dark:text-light overflow-hidden'>

<Layout className={' relative  dark:bg-blackBanner dark:bg-cover dark:bg-center dark:bg-no-repeat min-h-screen py-16  lg:pt-32 '}>

  <div className=' flex items-center justify-between gap-24 lg:gap-0  w-full  flex-col lg:flex-row  '>

    <div className='   w-full flex flex-col mt-24 md:mt-32 lg:mt-0   items-center lg:items-start  self-center gap-2  '>

    <AnimatedText text={"Hello"} classname=' p-1 lg:p-3 dark:text-[#ff014f]'/> 
       <AnimatedText text={"I'm Usama Irshad a"} classname=' p-1 lg:p-3'/> 
      
  
<RotatingText
  texts={['Full Stack Developer', 'Frontend Developer', 'Wordpress Developer', 'Shopify Developer']}
  mainClassName="px-2  sm:px-2 md:px-3 dark:bg-[#ff014f]  bg-blue-500 text-white  overflow-hidden  py-2 md:py-2 justify-center rounded-lg font-bold text-3xl sm:text-2xl md:text-4xl"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/> 

<p className=' hidden sm:block my-4 text-base font-medium dark:text-light w-[100%] md:w-[80%] '>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
     <span className=' hidden sm:block'>  Explore my latest projects  showcasing my expertise in React.js and web development.</span></p>

      <div className=' flex items-center lg:items-start gap-8   mt-2 self-center lg:self-start'>

<Link href={'/FullStack Developer Resume.pdf'} target='blank' className=' flex items-center
 bg-dark p-2 sm:p-2.5 px-6 text-white rounded-lg text-md sm:text-lg font-semibold     dark:bg-light dark:text-dark   border-2 border-solid border-transparent ' download={true}>Resume <LinkArrow className='w-6 ml-1' /></Link>

        <Link href={"https://wa.me/923016613599?text=Hey%20I%20am%20interested%20in%20your%20services!"} target='blank' 
    className=' flex items-center bg-dark p-3 sm:p-4.5 px-6 text-white rounded-lg text-md
  sm:text-lg font-semibold   dark:bg-[#ff014f]  dark:text-white  border-2 border-solid border-transparent '>Contact</Link>
      </div>
    </div>

  <div className='w-[100%]  flex justify-center '>
  <motion.div className=' relative  rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light w-[90%] lg:w-[70%]'
   initial={{rotateY:180 }} animate={{rotateY:0 }} transition={{duration:1}}>

        <motion.div className='absolute bottom-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light ' initial={{ opacity:0}} animate={{opacity:1}} transition={{delay:2}}/>

        <Image
          src={profileImage}
          alt='profile'
          className='w-full h-auto rounded-2xl '
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      </motion.div>
      </div>
   
  </div>
</Layout>


<HireMe />

    </main>

    </>
  );
}
