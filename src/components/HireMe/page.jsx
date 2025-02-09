import React from 'react'

import Link from 'next/link'
import { CircularText } from '../Icon/page'

const HireMe = () => {
  return (
    <>
    
  
    <div
        className="fixed right-4 top-0 flex items-center justify-center overflow-hidden 
                   md:left-8 md:right-auto md:bottom-0 md:top-auto md:absolute"
      >
        <div className='md:w-48 w-24 h-auto flex items-center justify-center relative'>
      <CircularText className={'fill-dark animate-spin-slow dark:fill-light    '}/>

            <Link href={'mailto:itsusamairshad@gmail.com'} className='flex items-center justify-center bg-dark text-white dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:border-light hover:dark:text-light   absolute md:left-1/2 md:top-1/2  md:-translate-x-1/2 md:-translate-y-1/2 shadow-md border border-solid border-dark md:w-20 md:h-20  rounded-full font-semibold hover:bg-light hover:text-dark w-12 h-12 text-[10px] md:text-lg'>Hire Me</Link>
        </div>
    </div>

    </>
  )
}

export default HireMe