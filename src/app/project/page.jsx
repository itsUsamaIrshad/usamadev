'use client'
import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Project1 from '../../../public/images/projects/project1.png'
import Project2 from '../../../public/images/projects/project1.png'
import Project3 from '../../../public/images/projects/project1.png'
import Project4 from '../../../public/images/projects/project1.png'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect/page'
import Layout from '@/components/Layout/page'
import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icon/page'



const Projects = () => {


    const FramerImage = motion(Image)


    const FeaturedProjects = ({type, title, summary, image, link,github})=>
    {
        return(
    <article className='w-full flex flex-col lg:flex-row items-center   md:justify-between rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl my-24 p-6 md:p-12 relative rounded-br-2xl'>
    <div className=' absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl'/>
                <Link href={link} target='blank' className='w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={image}  className=' w-full h-auto' alt='image' whileHover={{scale:1.05}} transition={{duration:0.2}}  priority  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
                </Link>
                <div className=' w-full flex flex-col  items-start justify-between pl-6'>
                    <span className=' text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
                    <Link href={link} target='blank'className=' hover:underline underline-offset-2'>
                    <h2 className=' my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
                    </Link>

                <p className=' my-2 font-medium text-dark dark:text-light'>{summary}</p>
                    <div className=' mt-2 flex items-center'>
                <Link href={github} target='blank' className='w-10'><GithubIcon/></Link>
                <Link href={link} target='blank' className=' ml-4 bg-dark dark:bg-light dark:text-dark text-white p-2 px-6 text-lg font-semibold rounded-lg'>Visit Project</Link>
                    </div>
                </div>
            </article>
        )
    }


    const Project = ({title,type,image,link,github})=>
    {
        return(
            <article className=' w-full flex flex-col justify-center items-center rounded-2xl border border-solid border-dark bg-light  dark:bg-dark dark:border-light p-6 relative rounded-br-2xl my-12'>

                <div className=' absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl '/>
                    <Link href={link} target='blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={image}  className=' w-full h-auto' alt='image'whileHover={{scale:1.05}} transition={{duration:0.2}}  priority  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                </Link>
                <div className=' w-full flex flex-col items-start justify-between mt-4'>
                <span className=' text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
                    <Link href={link} target='blank'className=' hover:underline underline-offset-2'>
                    <h2 className=' my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                    </Link>

              
                    <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target='blank' className='  text-lg font-semibold underline'>Visit</Link>
                <Link href={github} target='blank' className='w-8'><GithubIcon/></Link>
               
                    </div>
                </div>
            </article>
        )
    }


  return (
    <>
       <Head>
        <title>Project | Page</title>
        <meta name='description' content='any description'/>
    </Head>

<TransitionEffect/>
    <main className='w-full   flex flex-col items-center bg-light justify-center dark:text-light'>
        <Layout className={'pt-32'}>
            <AnimatedText text={'Projects'} classname={'mb-16'}/>

            
            <div className=' grid grid-cols-12 place-items-center gap-6 px-4 md:px-12 '>
                
 <div className='col-span-12 w-full '>

    <FeaturedProjects title={'Crypto Screener Application'}
    image={Project1} summary={'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. '}
    link={'/'} github={'/'} type={'Featured Project'}/>
    </div>

                <div className='col-span-12 md:col-span-6'>
    <Project title={'Crypto Screener Application'}
    image={Project1}
    link={'/'} github={'/'} type={'Featured Project'}/>
    </div>
                <div className='col-span-12 md:col-span-6'>
                  
    <Project title={'Crypto Screener Application'}
    image={Project2}
    link={'/'} github={'/'} type={'Featured Project'}/>
    </div>
               
                <div className=' col-span-12'>
    <FeaturedProjects title={'Crypto Screener Application'}
    image={Project3} summary={'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. '}
    link={'/'} github={'/'} type={'Featured Project'}/>
    </div>
               
                <div className='col-span-12 md:col-span-6'>
    <Project title={'Crypto Screener Application'}
    image={Project4}
    link={'/'} github={'/'} type={'Featured Project'}/>
    </div>
                <div className='col-span-12 md:col-span-6'>
    <Project title={'Crypto Screener Application'}
    image={Project1}
    link={'/'} github={'/'} type={'Featured Project'}/>
    </div>
            </div>
        </Layout>
    </main>
    
    

    
    
    
    
    </>
  )
}

export default Projects