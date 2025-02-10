'use client'
import Image from 'next/image';
import profileImage from '../../public/images/profile/darkUsama.png'
import Link from 'next/link';
import TransitionEffect from '@/components/TransitionEffect/page';
import AnimatedText from '@/components/AnimatedText';
import HireMe from '@/components/HireMe/page';
import { LinkArrow } from '@/components/Icon/page';
import Layout from '@/components/Layout/page';
import RotatingText from '@/components/RotatingText/page'


export default function Home() {
  return (
    
    <>
   <TransitionEffect/>

    <main className=' flex items-start text-dark w-full min-h-screen dark:text-light overflow-hidden'>

<Layout className={' relative  dark:bg-blackBanner dark:bg-cover dark:bg-center dark:bg-no-repeat h-screen sm:h-[140vh] md:h-[100vh] '}>

  <div className=' flex items-center justify-between  w-full  flex-col lg:flex-row  '>

    <div className='  w-full flex flex-col mt-24 md:mt-32 lg:mt-0   items-center lg:items-start  self-center '>

    <AnimatedText text={"Hello"} classname=' p-1 lg:p-3 dark:text-[#ff014f]'/> 
       <AnimatedText text={"I'm Usama Irshad a"} classname=' p-1 lg:p-3'/> 
      
  
<RotatingText
  texts={['Full Stack Developer', 'Frontend Developer', 'Wordpress Developer', 'Shopify Store Developer']}
  mainClassName="px-2  sm:px-2 md:px-3 dark:bg-[#ff014f] text-white  overflow-hidden  sm:py-0 md:py-2 justify-center rounded-lg font-bold text-xl sm:text-2xl md:text-4xl"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/> 

<p className=' hidden sm:block my-4 text-base font-medium dark:text-light w-[100%] md:w-[80%] '>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
     <span className=' hidden sm:block'>  Explore my latest projects and articles, showcasing my expertise in React.js and web development.</span></p>

      <div className=' flex items-center lg:items-start gap-8   mt-2 self-center lg:self-start'>

<Link href={'/dummy.pdf'} target='blank' className=' flex items-center
 bg-dark p-1 sm:p-2.5 px-6 text-white rounded-lg text-md sm:text-lg font-semibold     dark:bg-light dark:text-dark   border-2 border-solid border-transparent ' download={true}>Resume <LinkArrow className='w-6 ml-1' /></Link>

        <Link href={'mailto:usama@gmail.com'} target='blank' 
    className=' flex items-center bg-dark p-1 sm:p-2.5 px-6 text-white rounded-lg text-md
  sm:text-lg font-semibold   dark:bg-[#ff014f]  dark:text-white  border-2 border-solid border-transparent '>Contact</Link>
      </div>
    </div>
    <div className='w-[100%] flex justify-center'>

<Image 
src={profileImage} 
alt='image' 
className=' md:w-[60%]  lg:w-[50%] h-auto overflow-hidden  absolute bottom-0' 
priority  
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" 
/>

</div>
  </div>
</Layout>


<HireMe />

    </main>

    </>
  );
}
