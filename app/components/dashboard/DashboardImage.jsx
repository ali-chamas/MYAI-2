import Image from 'next/image'
import React from 'react'

const DashboardImage = () => {
  return (
    <div className='relative mt-20 md:mt-0  w-[250px] h-[250px] md:w-[350px] md:h-[350px] -z-20'>
    <Image src={'/dashboard.png'} fill alt='' className='z-0 rounded-[30%]'/>
    
    <div className='absolute bg-gradient-to-tr from-purple-700 to-red-600 opacity-30 blur-xl w-[350px] h-[350px] md:w-[450px] md:h-[450px] -z-20 rounded-full -left-16 '></div>
    </div>
  )
}

export default DashboardImage