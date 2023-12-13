
import React from 'react'


const PageDesign = ({title,icon,desc,color}) => {
  return (
    <div className='w-full  flex flex-col gap-10 items-center justify-center mx-5 py-7 '>
        
    <div className='flex items-center  gap-2'>
        <div  className={`text-6xl md:text-7xl text-white p-2 bg-${color}-700 bg-opacity-40 rounded-xl`}>
        {icon}
        </div>
      
      <div className='flex flex-col items-start  gap-1'>
    <h1 className='hero_font text-2xl lg:text-4xl xl:text-5xl text-center '>{title}</h1>
    <p className='text-white ml-2'>{desc}</p>
    </div>
    </div>
    
   
    
    </div>
  )
}

export default PageDesign