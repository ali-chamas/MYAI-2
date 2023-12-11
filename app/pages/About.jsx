'use client'
import React from 'react'
import Image from 'next/image'
import { motion as m } from 'framer-motion'
const About = () => {
  return (

    <div className=' h-full flex flex-col items-center mt-10 md:mt-16 mx-5 ' id='about'>
      <h1 className='hero_font text-5xl md:text-6xl lg:text-7xl'>About</h1>
    
    <div className=' flex flex-col items-center h-max  gap-10 md:flex-row md:w-full md:justify-center  lg:justify-between lg:px-10 xl:px-16 mt-10 md:text-lg ' > 
      
    
      
      
      
      

      <div className=' border-2 bg-slate-900 border-red-300 rounded-2xl p-4 px-10 shadow-lg shadow-orange-200 max-w-[500px] bg-opacity-30 z-30 backdrop-filter backdrop-blur-lg'>
      <h2 className='hero_font text-2xl'>Who is Myai?</h2>
      <p className='text-left'>My Ai is a friendly AI companion , with his genius little AI brain, he will help you with everyday tasks that includes leaning, and solving problems , and even havng fun and being creative!</p>
        <h2 className='hero_font text-2xl'>Our Features:</h2>
        <div className='flex flex-col gap-2 text-sm'>
          <li>Image , video and music Generator.</li>
          <li>Email generator and sender.</li>
          <li>Powerpoint generator.</li>
          <li>Awesome Quiz generator.</li>
          
          </div>
      
      </div>
      <div className='relative min-w-[250px] min-h-[250px] w-[300px] h-[300px] md:h-[400px] md:w-[440px] lg:h-[450px] lg:w-[450px] xl:w-[470px] xl:h-[470px] '>
      <Image src={"/About.png"} fill alt='' className='rounded-full'/>
      </div>
      </div>
      <m.div
        whileInView={{y:[0,200,0,200,0],transition:{duration:15,ease:'linear',repeat:Infinity,delay:1}}}
        className='hidden md:block absolute bg-gradient-to-br from-orange-300 to-orange-400 h-[10%] w-[7%] blur-3xl top-[20%]'/>
        
        <m.div
         whileInView={{x:[0,200,0,200,0],y:[0,-100,0,200,0],transition:{duration:15,ease:'linear',repeat:Infinity,delay:1}}}
        className='hidden md:block absolute bg-gradient-to-br from-red-300 to-red-400 h-[20%] w-[12%] blur-3xl  bottom-[110%] left-[40%] '/>
        <m.div
         whileInView={{x:[0,200,0,200,0] ,y:[0,200,0,200,0],transition:{duration:15,ease:'linear',repeat:Infinity,delay:1}}}
        className='hidden md:block absolute bg-gradient-to-br from-orange-300 to-orange-400 h-[15%] w-[8%] blur-3xl  top-[110%] right-[7%] '/>

<m.div
         whileInView={{x:[0,200,0,200,0],y:[0,-10,0,50,0],transition:{duration:15,ease:'linear',repeat:Infinity,delay:1}}}
        className='hidden md:block absolute bg-gradient-to-br from-red-300 to-red-400 h-[5%] w-[6%] blur-3xl  bottom-[140%] left-[80%] '/>

<m.div
         whileInView={{x:[0,200,0,200,0] ,y:[0,200,0,200,0],transition:{duration:15,ease:'linear',repeat:Infinity,delay:1}}}
        className='hidden md:block absolute bg-gradient-to-br from-orange-300 to-orange-400 h-[8%] w-[5%] blur-3xl  top-[180%] right-[7%] '/>
        <m.div
         whileInView={{x:[0,200,0,200,0] ,y:[0,10,0,10,0],transition:{duration:15,ease:'linear',repeat:Infinity,delay:1}}}
        className='hidden md:block absolute bg-gradient-to-br from-red-300 to-red-600 h-[18%] w-[15%] blur-3xl  top-[180%] right-[90%] -z-10'/>
        <div className='md:hidden absolute bg-gradient-to-br from-orange-300 to-orange-400 h-[20%] w-[17%] blur-3xl top-[120%]'></div>
        <div className='md:hidden absolute bg-gradient-to-br from-red-300 to-red-800 h-[20%] w-[17%] blur-3xl top-[150%] left-3'></div>
      </div>
    
  )
}

export default About 
