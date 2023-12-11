'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'

const MobileMenu = ({links,icons}) => {
    const [open,setOpen]=  useState(false)
    
  return (
    <div>
      <RxHamburgerMenu onClick={()=>setOpen(open=>!open)}/>

      {open&&
      <div className='absolute bg-opacity-40 bg-slate-900 backdrop-filter backdrop-blur-sm text-lg flex flex-col items-center justify-center right-0 px-10   gap-2 p-4 '>
        {links.map(link=>(
          <Link key={link.id} href={link.path}>{link.title}</Link>
        ))}
        <div className='flex gap-2 text-2xl'>
            {icons.map(icon=>(<Link key={icon.id} href={icon.path}>{icon.title}</Link>))}
        </div>
      </div>
      }
    </div>
    
    
    
  )
}

export default MobileMenu
