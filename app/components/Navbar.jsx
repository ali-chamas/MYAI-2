'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import {links} from '@/utils/arrays'
import {icons} from '@/utils/arrays'



const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  return (
    <div className={`flex items-center justify-between md:justify-evenly  sticky top-0 z-50   px-5 p-3 lg:p-1 ${scrolled && 'bg-opacity-30 backdrop-filter backdrop-blur-md shadow-lg' }`}>
      <Link href={'/'}>
        <div className='relative h-[50px] w-[50px] md:h-[70px] md:w-[70px] lg:h-[80px] lg:w-[80px] '>
        <Image src={'/logo.png'} fill alt='logo' className=' rounded-full  '></Image>
        </div>
      </Link>

        <div className='md:hidden text-4xl'>
        <MobileMenu links={links} icons={icons}/>
        </div>
        <div className='hidden md:flex items-center gap-7   text-lg '>
            {links.map(link=>(
              <Link href={link.path} className='opacity-80 hover:opacity-100'>{link.title}</Link>
            ))}


        </div>
        <div className='hidden md:flex gap-5 items-center text-2xl  '>
        {icons.map(icon=>(
              <Link href={icon.path} target='_blank' className='opacity-80 hover:opacity-100'>{icon.title}</Link>
            ))}
        </div>

       

    </div>
  )
}

export default Navbar
