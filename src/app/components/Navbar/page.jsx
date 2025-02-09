'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Logo from '../Logo/page'
import { usePathname } from 'next/navigation'
import  { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon , } from '../Icon/page'
import { motion } from 'framer-motion'
import DarkModeToggle from '../useThemeSwitcher/page'
import HireMe from '../HireMe/page'



const Navbar = () => {
  
  
  
  const CustomLinks = ({href ,title , className=''})=>
    {
      
      const pathname = usePathname()
        return(
            <>
            <Link href={href} className={`${className} relative group`}>
            {title}
 <span className={`h-[2px] inline-block bg-dark dark:bg-light  absolute left-0
   -bottom-0.5 group-hover:w-full group-active:w-full transition-[width] ease duration-300 ${pathname === href ? 'w-full':'w-0'} `}>&nbsp;</span>
            </Link>
           
            </>
        )
    }


    const CustomMobileLinks = ({href ,title , className='' , toggle})=>
      {
        const pathname = usePathname()

        // const handleClick = ()=>
        // {
          
        //   toggle()
        //   pathname.push(href)
        // }
        
        return(
          <>
      <Link href={href} className={`${className} relative group text-light dark:text-dark my-2`} >
            {title}
    <span className={`h-[1px] inline-block bg-light dark:bg-dark  absolute left-0 -bottom-0.5 group-hover:w-full group-active:w-full transition-[width] ease duration-300 ${pathname === href ? 'w-full':'w-0'} `}>&nbsp;</span>
              </Link>
             
              </>
          )
      }
  
      const [open , setOpen] = useState(false)

    const handleClick = (e) =>
    {
      
      setOpen(!open)
    }



  return (
  <header className=' w-full px-8 sm:px-16 lg:px-32 py-10 font-medium flex  items-center justify-between dark:bg-dark dark:text-light   relative  '>

<button className='flex-col items-center justify-center flex md:hidden ' onClick={handleClick}>
<span className={`bg-dark dark:bg-light block transition-all duration-300
  ease-out h-0.5 w-6 rounded-sm  ${open ? ' rotate-45 translate-y-1':'-translate-y-0.5'}`}></span>

  <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out
   h-0.5 w-6 rounded-sm my-0.5 ${open ? 
  'opacity-0':'opacity-1'}`}></span>

  <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out
     h-0.5 w-6 rounded-sm -translate-y-0.5 ${open ? ' -rotate-45 -translate-y-1':'translate-y-0.5'}`}></span>

</button>


      
     <div className=' w-full justify-between items-center hidden md:flex '>
     <nav>
          <CustomLinks title='Home' href={'/'} className='mr-4'/>
          <CustomLinks title='About' href={'/about'}  className='mr-4'/>
          <CustomLinks title='Project' href={'/project'}  className='mr-4'/>
          <CustomLinks title='Contact' href={'/Contact'}  className='mr-4'/>
        </nav>
        
        <nav className=' flex items-center justify-center flex-wrap '>
       
            <motion.a href={'/'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3' ><GithubIcon/></motion.a>
            <motion.a href={'/'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3'><LinkedInIcon/></motion.a>
         
            <motion.a href={'/'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 ml-3'><DarkModeToggle/></motion.a>
           
        </nav>
   
     </div>
      

{open ?
     <motion.div initial={{scale:0, opacity:0, x:'-50%',y:'-50%' }} animate={{scale:1,opacity:1}} className=' min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'>
     <nav className=' flex flex-col items-center justify-center'>
          <CustomMobileLinks title='Home' href={'/'} className='' toggle={handleClick} />
          <CustomMobileLinks title='About' href={'/about'}  className='' toggle={handleClick}/>
          <CustomMobileLinks title='Project' href={'/project'}  className='' toggle={handleClick}/>
          <CustomMobileLinks title='Article' href={'/article'}  className='' toggle={handleClick}/>
        </nav>
        
        <nav className=' flex items-center justify-center flex-wrap '>
        

            <motion.a href={'/'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3 sm:mx-1' ><GithubIcon/></motion.a>

            <motion.a href={'/'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3 sm:mx-1'><LinkedInIcon/></motion.a>
                       
            <motion.a href={'/'} whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 ml-3'><DarkModeToggle/></motion.a>
        </nav>
     </motion.div>
:null
}

        <div className=' absolute left-[50%] translate-x-[-50%]'>
        <Logo />
        </div>
       
    </header>
  )
}

export default Navbar