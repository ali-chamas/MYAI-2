'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion as m } from 'framer-motion';
import Link from 'next/link'
const HeroSection = () => {
  return (
    <div className=' mt-5 flex flex-col items-center h-[90vh] 2xl:h-screen gap-10 md:flex-row md:w-full md:justify-center  lg:justify-between lg:px-28 2xl:px-40 '>

      <div className='flex flex-col items-center  gap-5'>
      <h1 className='hero_font text-5xl md:text-8xl lg:text-9xl h-[60px]  md:h-[122px] lg:h-[152px]'>
            MyAI
        </h1>
        <div className='items-center flex flex-col  gap-1'>
        <p className='text-xl md:text-3xl lg:text-4xl text-center'>
          The best AI Companion for 
          </p>
        <TypeAnimation
        className='text-xl md:text-3xl lg:text-5xl text-red-400 lg:min-w-[400px] text-center'
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Solving Problems',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Learning',
        1000,
        'Having Fun',
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      
      repeat={Infinity}
    />
        
        </div>
        <Link href="/login" className="relative rounded px-5 py-2.5 overflow-hidden group  bg-gradient-to-r from-orange-300 to-red-500  hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-300 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300">
<span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span className="relative text-xl">Try Now</span>
</Link>
      </div>
      
        
        <div className='relative h-[280px] w-[280px] md:h-[440px] md:w-[440px] lg:h-[500px] lg:w-[500px] xl:w-[520px] xl:h-[510px]'>
        <Image src={'/Hero.png'} alt='hero' fill className='rounded-full'></Image>
        </div>
        <m.div
        whileInView={{y:[0,200,0,200,0],transition:{duration:15,ease:'linear',repeat:Infinity,delay:1}}}
        className='hidden md:block absolute bg-gradient-to-br from-orange-300 to-orange-400 h-[10%] w-[7%] blur-3xl top-[20%]'/>
        
        <m.div
         whileInView={{x:[0,200,0,200,0],y:[0,-100,0,200,0],transition:{duration:15,ease:'linear',repeat:Infinity,delay:1}}}
        className='hidden md:block absolute bg-gradient-to-br from-red-300 to-red-400 h-[20%] w-[12%] blur-3xl  bottom-[10%] left-[40%] -z-20'/>
        <m.div
         whileInView={{x:[0,200,0,200,0] ,y:[0,200,0,200,0],transition:{duration:15,ease:'linear',repeat:Infinity,delay:1}}}
        className='hidden md:block absolute bg-gradient-to-br from-orange-300 to-orange-400 h-[15%] w-[8%] blur-3xl  top-[10%] right-[7%] '/>

<m.div
         whileInView={{x:[0,200,0,200,0],y:[0,-100,0,200,0],transition:{duration:15,ease:'linear',repeat:Infinity,delay:1}}}
        className='hidden md:block absolute bg-gradient-to-br from-red-300 to-red-400 h-[5%] w-[6%] blur-3xl  bottom-[40%] left-[80%] '/>

<m.div
         whileInView={{x:[0,200,0,200,0] ,y:[0,200,0,200,0],transition:{duration:15,ease:'linear',repeat:Infinity,delay:1}}}
        className='hidden md:block absolute bg-gradient-to-br from-orange-300 to-orange-400 h-[8%] w-[5%] blur-3xl  top-[80%] right-[7%] '/>
        <m.div
         whileInView={{x:[0,200,0,200,0] ,y:[0,200,0,200,0],transition:{duration:15,ease:'linear',repeat:Infinity,delay:1}}}
        className='hidden md:block absolute bg-gradient-to-br from-red-300 to-red-600 h-[8%] w-[5%] blur-3xl  top-[80%] right-[90%] '/>
        <div className='md:hidden absolute bg-gradient-to-br from-orange-300 to-orange-400 h-[10%] w-[7%] blur-3xl top-[20%]'></div>
        <div className='md:hidden absolute bg-gradient-to-br from-red-300 to-red-800 h-[10%] w-[7%] blur-3xl top-[80%] left-3'></div>
    </div>
  )
}

export default HeroSection
