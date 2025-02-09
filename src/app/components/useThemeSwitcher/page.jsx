// import React, { useEffect, useState } from 'react'

// const useThemeSwitcher = () => {

//     const preferDarkQuery = "(prefer-color-scheme: dark)"
//     const [mode , setMode] = useState('')

//     useEffect(()=>
//     {
//  const mediaQuery = window.matchMedia(preferDarkQuery)
//  const usePref = window.localStorage.getItem('theme')

//  const handleChange = ()=>
//  {
//     if(usePref)
//     {
//         let check = usePref === 'dark'? 'dark':'light'
//         setMode(check);

//         if(check === 'dark')
//         {
//             document.documentElement.classList.add('dark');
//         }
//         else
//         {
//             document.documentElement.classList.remove('dark'); 
//         }
//     }
//     else
//     {
//         let check = mediaQuery.matches ? 'dark':'light'
//         setMode(check);

//         if(check === 'dark')
//         {
//             document.documentElement.classList.add('dark');
//         }
//         else
//         {
//             document.documentElement.classList.remove('dark'); 
//         }
//     }
//  }

//  mediaQuery.addEventListener('change' , handleChange)

//  return ()=> mediaQuery.removeEventListener('change',handleChange)
//     },[])


//     useEffect(()=>
//     {
// if(mode==='dark')
// {
//     window.localStorage.setItem('theme' , 'dark')
//     document.documentElement.classList.add('dark')
// }
// else
// {
//     window.localStorage.setItem('theme' , 'light')
//     document.documentElement.classList.remove('dark')
// }
//     },[])


//   return [mode , setMode]
// }

// export default useThemeSwitcher

import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "../Icon/page";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleDarkMode = (event) => {
    event.preventDefault(); // **Ensure page does not reload**
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>

    <button
      onClick={toggleDarkMode}
      className="p-1 bg-dark dark:bg-light   text-light dark:text-dark rounded-full"
    >
      {darkMode ? <MoonIcon className=' fill-dark'/>:<SunIcon className=' fill-dark'/>}

     </button>
    </>
  );
}
