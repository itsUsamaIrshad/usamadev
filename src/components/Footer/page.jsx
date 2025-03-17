import React from 'react'
import Layout from '../Layout/page'
import Link from 'next/link'
const Footer = () => {

  return (
    <>
 <footer className= '  w-full border-t-2 border-solid border-dark  dark:border-light'>
    <Layout className={'py-4  flex flex-col gap-4 md:flex-row items-center justify-between '}>

        <span className=' dark:text-light '>{new Date().getFullYear()} &copy; All Right Reserved</span>

        <div className='flex items-center dark:text-light '>Build with <span className='px-1'>&#9825;</span> <Link href={'mailto:itsusamairshad@gmail.com'} className=' underline '>Usama Developer</Link> </div>
       
        <Link href={'mailto:itsusamairshad@gmail.com'} className='dark:text-light ' target='_blank'>Say Hello</Link>
    </Layout>

    </footer>    


    
    </>
  )
}

export default Footer