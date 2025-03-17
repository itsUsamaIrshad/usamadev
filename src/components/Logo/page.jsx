'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import logoIcon from '../../../public/logo.png'
import Image from 'next/image'

const Logo = () => {


    const MotionLink = motion(Link)

  return (
    <>
    <div className=' flex item-center justify-center mt-2'>
        <MotionLink href='/'>
         <Image src={logoIcon} alt="Usama Logo" width={70} height={50} /></MotionLink>
    </div>
    </>
  )
}

export default Logo