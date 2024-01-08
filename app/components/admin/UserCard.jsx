'use client'
import React, { useState } from 'react'
import UserPopup from './UserPopup'

const UserCard = ({user,setTrigger}) => {
    const [openPopup,setOpenPopup]=useState(false)
  return (
    <div className='w-full'>
        {openPopup&& <div className=''><UserPopup setTrigger={setTrigger} user={user} setOpenPopup={setOpenPopup}/></div>}
    <button className={`flex w-full ${user.banned ? 'bg-red-900': ' bg-slate-900'} rounded-xl p-3 gap-5 items-center hover:opacity-90`} onClick={()=>setOpenPopup(true)}>
        <div>
            <img src={user.image} className='w-[50px] h-[50px] md:h-[60px] md:w-[60px] rounded-full' alt="" />
        </div>
        <div className='flex flex-col gap-3 items-center'>
            <h1 className='font-bold md:text-lg'>
            {user.name}
            </h1>
            <small className='text-gray-300'>
                {user.email}
            </small>
            
        </div>
        
    </button>
    </div>
  )
}

export default UserCard