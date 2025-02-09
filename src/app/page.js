'use client'
import Image from 'next/image';
import profileImage from '../../public/images/profile/developer-pic-2.png'
import Link from 'next/link';
import TransitionEffect from '@/components/TransitionEffect/page';
import AnimatedText from '@/components/AnimatedText';
import HireMe from '@/components/HireMe/page';
import { LinkArrow } from '@/components/Icon/page';
import Layout from '@/components/Layout/page';



export default function Home() {
  return (
    
    <>
   <TransitionEffect/>
    <main className=' flex items-start text-dark w-full h-screen dark:text-light'>

<Layout className={'pt-0 md:p-16  '}>
  <div className=' flex items-center justify-between w-full gap-[100px] flex-col md:flex-row'>

    <div className=' w-full flex flex-col items-center self-center  text-center md:text-left'>
      
       <AnimatedText text={'Turning Vision Into Reality With Code And Design.'} classname=' p-3'/> 
     
      <p className=' my-4 text-base font-medium dark:text-light w-[65%] hidden md:d-block'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
      Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
      <div className=' flex items-center gap-16   mt-2 self-center'>

        <Link href={'/dummy.pdf'} target='blank' className=' flex items-center bg-dark p-2.5 px-6 text-white rounded-lg text-lg font-semibold hover:bg-light hover:dark:bg-dark hover:dark:border-light hover:dark:text-light dark:bg-light dark:text-dark   hover:text-dark border-2 border-solid border-transparent hover:border-dark' download={true}>Resume <LinkArrow className='w-6 ml-1' /></Link>

        <Link href={'mailto:usama@gmail.com'} target='blank' className='text-lg font-medium capitalize text-dark underline dark:text-light  '>Contact</Link>
      </div>
    </div>
    <div className='w-full md:hidden block '>

<Image 
src={profileImage} 
alt='image' 
className=' w-full h-auto' 
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
