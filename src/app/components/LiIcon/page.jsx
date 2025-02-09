'use client'
import React from 'react'
import { motion, useScroll } from 'framer-motion'

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['start end', 'center center']
  })

  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light">
      <svg className="-rotate-90" width={75} height={75} viewBox="0 0 100 100">
        {/* Outer circle */}
        <circle cx={50} cy={50} r={20} className="stroke-primary dark:stroke-primaryDark stroke-1 fill-none" />
        
        {/* Animated progress circle */}
        <motion.circle
          cx={50}
          cy={50}
          r={20}
          className="stroke-[5px] fill-light dark:fill-dark"
          style={{ pathLength: scrollYProgress }}
        />

        {/* Inner pulsing circle */}
        <circle cx={50} cy={50} r={10} className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark" />
      </svg>
    </figure>
  )
}


export default LiIcon