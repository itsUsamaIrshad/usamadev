// 'use client'

// import { useState, useEffect } from "react";
// import { MoonIcon, SunIcon } from "../Icon/page";

// export default function DarkModeToggle() {
//   const [darkMode, setDarkMode] = useState(
//     localStorage.getItem("theme") === "dark"
//   );

//   const toggleDarkMode = (event) => {
//     event.preventDefault(); // **Ensure page does not reload**
//     setDarkMode((prevMode) => !prevMode);
//   };

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   return (
//     <>

//     <button
//       onClick={toggleDarkMode}
//       className="p-1 bg-dark dark:bg-light   text-light dark:text-dark rounded-full"
//     >
//       {darkMode ? <MoonIcon className=' fill-dark'/>:<SunIcon className=' fill-dark'/>}

//      </button>
//     </>
//   );
// }
'use client'

import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "../Icon/page";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(null); // Set initial state to null

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Access localStorage inside useEffect
      setDarkMode(localStorage.getItem("theme") === "dark");
    }
  }, []);

  const toggleDarkMode = (event) => {
    event.preventDefault(); 
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (darkMode !== null) {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [darkMode]);

  return (
    <button
      onClick={toggleDarkMode}
      className="p-1 bg-dark dark:bg-light text-light dark:text-dark rounded-full"
    >
      {darkMode ? <MoonIcon className="fill-dark" /> : <SunIcon className="fill-dark" />}
    </button>
  );
}
