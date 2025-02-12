'use client'

import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout/page'
import Head from 'next/head'
import React from 'react'

const page = () => {
  return (

    <>
    <Head>
    <title>Contact | Page</title>
    <meta name='description' content='any description'/>
</Head>

<main>

<Layout className={'pt-32'}>

  <AnimatedText text={'Contact US'} classname={'mb-16'}/>

<div className='w-full flex justify-center items-center py-4  text-white'>

<div className=' w-1/2 p-5'>

<form className='  p-6 rounded-lg shadow-lg border border-gray-600  border-1 border-solid  '>
<div className='mb-4'>
            <label className='block text-sm font-semibold mb-2 dark:text-white text-black'>Name</label>
            <input 
  type='text' 
  className='w-full p-2 rounded bg-transparent border focus:border-1 focus:outline-none   border-gray-600   dark:bg-black  dark:border-gray-600 dark:focus:border-white text-black dark:text-white' 
  placeholder='Peter' 
/>

          </div>
          <div className='mb-4'>
            <label className='block text-sm font-semibold mb-2 dark:text-white text-black'>Email</label>
            <input type='email'   className='w-full p-2 rounded bg-transparent border focus:border-1 focus:outline-none   border-gray-600   dark:bg-black  dark:border-gray-600 dark:focus:border-white text-black dark:text-white' placeholder='qwerty@gmail.com' />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-semibold mb-2 dark:text-white text-black'>Your Message</label>
            <textarea   className='w-full p-2 rounded bg-transparent border focus:border-1 focus:outline-none   border-gray-600   dark:bg-black  dark:border-gray-600 dark:focus:border-white text-black dark:text-white'  placeholder='Greeting.......' />
          </div>
          <button className='border border-1 border-white outline-none border-solid dark:bg-transparent  p-2 rounded-md w-full dark:hover:bg-white dark:hover:text-dark transition-all duration-500 bg-blue-500'>Send Message</button>
         
</form>

</div>
</div>

</Layout>
</main>


    </>

  )
}

export default page