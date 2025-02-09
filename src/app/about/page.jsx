'use client'

import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import Layout from '../components/Layout/page'
import AnimatedText from '../components/AnimatedText'
import Profile_pic from '../../../public/images/profile/developer-pic-2.png'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skill from '../components/Skill/page'
import Experience from '../components/Experience/page'
import Education from '../components/Education/page'
import TransitionEffect from '../components/TransitionEffect/page'

const About = () => {


  const AnimatedNumber = ({value})=>
  {

    const ref = useRef(null)
    
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {duration:3000})
  const isInView = useInView(ref , {once:true})
  

  useEffect(()=>
  {
if(isInView)
  {
  motionValue.set(value)
}
},[isInView, value , motionValue])

  
useEffect(()=>
    {
      springValue.on('change' , (latest)=>{
        if(ref.current && latest.toFixed(0)<= value)
        {
          ref.current.textContent = latest.toFixed(0)
        }
      })
    },[ springValue , value]);
    return <span ref={ref}>{value}</span>;
};

  return (
    <>
    
    <Head>
        <title>About | Page</title>
        <meta name='description' content='any description'/>
    </Head>

<TransitionEffect/>
    <main className=' flex w-full flex-col items-center justify-start'>
        <Layout className={'pt-16'}>
        <AnimatedText text={'Passion fuel Purpose'} classname={'mb-16'}/> 
        <div className='grid w-full grid-cols-12 gap-8 sm:gap-12 md:gap-16 place-items-center'>
  
  {/* Bio Section */}
  <div className="col-span-12 sm:col-span-6 lg:col-span-5 xl:col-span-4 flex flex-col items-start justify-start">
    <h2 className='mb-4 text-lg sm:text-xl md:text-2xl font-bold uppercase text-dark/75 dark:text-light'>
      BioGraphy
    </h2>

    <p className='font-medium dark:text-light'>
      - Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional,
      and user-centered digital experiences. With 4 years of experience in the field, I am always looking for
      new and innovative ways to bring my clients' visions to life.
    </p>

    <p className='font-medium my-4 dark:text-light'>
      - I believe that design is about more than just making things look pretty – it's about solving problems and
      creating intuitive, enjoyable experiences for users.
    </p>

    <p className='font-medium dark:text-light'>
      - Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to
      every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
    </p>
  </div>
  
  {/* Profile Image Section */}
  <div className='col-span-12 sm:col-span-6 lg:col-span-5 xl:col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light'>
    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
    <Image
      src={Profile_pic}
      alt='profile'
      className='w-full h-auto rounded-2xl'
      priority
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </div>

  {/* Stats Section */}
  <div className='bg-red-500 col-span-12  sm:col-span-6 lg:col-span-2 xl:col-span-4 flex flex-col sm:flex-row lg:flex-col w-full items-center justify-center gap-6 p-6 rounded-lg'>
    {/* Stat Box 1 */}
    <div className='flex flex-col items-center justify-center text-center'>
      <span className='inline-block font-bold dark:text-light text-2xl sm:text-3xl md:text-4xl'>
        <AnimatedNumber value={50} />+
      </span>
      <h2 className='font-medium capitalize text-dark/75 dark:text-light text-lg sm:text-xl md:text-2xl'>
        Satisfied Clients
      </h2>
    </div>

    {/* Stat Box 2 */}
    <div className='flex flex-col items-center justify-center text-center'>
      <span className='inline-block font-bold dark:text-light text-2xl sm:text-3xl md:text-4xl'>
        <AnimatedNumber value={50} />+
      </span>
      <h2 className='font-medium capitalize text-dark/75 dark:text-light text-lg sm:text-xl md:text-2xl'>
        Projects Completed
      </h2>
    </div>

    {/* Stat Box 3 */}
    <div className='flex flex-col items-center justify-center text-center'>
      <span className='inline-block font-bold dark:text-light text-2xl sm:text-3xl md:text-4xl'>
        <AnimatedNumber value={50} />+
      </span>
      <h2 className='font-medium capitalize text-dark/75 dark:text-light text-lg sm:text-xl md:text-2xl'>
        Years of Experience
      </h2>
    </div>
  </div>

</div>

            <Skill/>
            <Experience/>
            <Education/>
        </Layout>
    </main>
    
    
    
    
    </>
  )
}

export default About