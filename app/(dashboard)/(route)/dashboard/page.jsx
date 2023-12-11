
import React from 'react'
import { tools } from '@/utils/arrays'
import Link from 'next/link'
const page = () => {
  return (
    <div className='w-full   flex flex-col gap-5 items-center px-5  my-7 '>

    <h1 className='text-4xl lg:text-5xl xl:text-6xl hero_font'>Hello Human!</h1>
    
    
    <p>What are we gonna create today?</p>

    <div className='grid gap-5 md:grid-cols-2 md:text-lg '>
      {
        tools.map((tool)=>(
          tool.title!=='Dashboard' &&
          (
          <Link key={tool.id} href={tool.link} className='shadow-lg rounded-md bg-slate-900 bg-opacity-30 p-5 hover:scale-105 transition-all duration-100 cursor-pointer flex flex-col items-start gap-3 '>
            <div className='flex items-center gap-3'>
              <div className='text-3xl text-orange-300'>
          {tool.icon}
          </div>
          <p>{tool.title}</p>
            </div>
            <small className='text-xs lg:text-sm max-w-[250px]'>{tool.desc}</small>
          </Link>
          )
        ))
      }
    </div>

    </div>
  )
}

export default page
