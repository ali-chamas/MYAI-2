'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
const ProfileSettings = () => {
    const user = useSession();
  
  return (
    <div className='flex items-center justify-between mb-5'>
        <div className='flex items-center gap-2'>
        <img  src={user.data.user.image} alt='profile image' className='rounded-full shadow-md hover:opacity-90 cursor-pointer  shadow-orange-200 w-[40px]'></img>
        <div className='flex flex-col'>
        <p>{user.data.user.name}</p>
        <p className='text-xs font-light text-gray-400'>{user.data.user.email}</p>
        </div>
        </div>
      
        <div>

        </div>
    </div>
  )
}

export default ProfileSettings
