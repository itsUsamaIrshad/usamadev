import React from 'react'

const Layout = ({children, className}) => {
  return (
    <div className={` w-full h-full inline-block  p-4 z-0   dark:bg-black ${className}`}>
      {children}
    </div>
  )
}

export default Layout 