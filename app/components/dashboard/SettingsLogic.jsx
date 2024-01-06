'use client'
import React from 'react'
import ProfileSettings from './ProfileSettings'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

const SettingsLogic = ({setOpen}) => {


  return (
    <div >
        <div className='flex flex-col gap-5 items-start md:text-lg mx-5 '>
            <ProfileSettings />
        <Link href={'/subscriptionSettings'} className='opacity-80 hover:opacity-100' onClick={()=>setOpen(false)}>Subscription Settings</Link>
        <Link href={'/howToUse'} className='opacity-80 hover:opacity-100' onClick={()=>setOpen(false)}>How to Use</Link>
        </div>
        <button className='relative bottom-0 left-[50%] mt-5 p-2 px-5 bg-gray-600 rounded-full hover:opacity-90 ' onClick={()=>signOut()} >Sign Out</button>
    </div>
  )
}

export default SettingsLogic
