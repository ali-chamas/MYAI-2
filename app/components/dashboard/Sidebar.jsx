'use client'

import React, { useState } from 'react'
import {AiFillCaretRight} from 'react-icons/ai'

import Profile from './Profile'
import Link from 'next/link'
import { motion as m } from 'framer-motion'
import { usePathname } from 'next/navigation'

import {tools} from '../../../utils/arrays';


const Sidebar = () => {

  const pathname = usePathname();


  const [openSidebar,setOpenSidebar]=useState(false);
  
  
  return (
    <div className='h-screen '>

    
    <div className={`h-full  bg-slate-900 shadow-lg shadow-slate-950  transition-all relative duration-[0.1s] z-50 ease-in  ${openSidebar ? 'w-screen  md:w-64 xl:w-72 ':'w-0 md:w-28'}`}>

      <div className={`absolute  -right-4 ${openSidebar && 'right-1 rotate-180 md:-right-4 md:rotate-0'} z-50 mt-64    bg-slate-950 h-[10%] rounded-tr-2xl rounded-br-2xl cursor-pointer flex items-center justify-center group`} onClick={()=>setOpenSidebar(open=>!open)}>
      <AiFillCaretRight className={` ${openSidebar && 'md:rotate-180 '} group-hover:opacity-80 text-orange-200 `} />
      </div>
      
      <div className='w-full'>
      <Profile open={openSidebar} />
      </div>
      <div className={` py-5 flex flex-col ${!openSidebar ? 'items-center':'px-5 items-start'} gap-6   `}>
      { tools.map(tool=>(
        <Link key={tool.id} href={tool.link} className={`flex gap-5 items-center
           ${pathname===tool.link ?'':'hover:opacity-80'} cursor-pointer group relative `} onClick={()=>{setOpenSidebar(false)}}>
          <div  className={`text-3xl p-4 transition-all duration-100   rounded-full   w-[60px] ${!openSidebar && ' hidden md:block'} ${pathname===tool.link ? ' bg-gradient-to-tr from-red-400 to-orange-600 ':'bg-slate-700 group-hover:shadow-md  group-hover:shadow-red-200'}`}>
          {tool.icon}
          </div>
          
          {openSidebar && 
          <m.p 
          
          initial={{opacity:0}}
          animate={{opacity:1}}
         transition={{duration:1,delay:0.2}}

          className={` ${!openSidebar ? 'hidden scale-0 ' : 'block   scale-100 transition-all duration-300 '} `
          
        }
          
          
          >{tool.title}</m.p>
      }
          </Link>
      ))}
      </div>
      </div>
    {openSidebar && <div className='bg-slate-800 bg-opacity-40 backdrop-blur-sm backdrop-filter top-0 w-screen   h-screen  z-30 fixed'></div>}
      
    </div>
  )
}

export default Sidebar
