'use client'
import React, { useContext, useEffect, useState } from 'react'
import UserCard from './UserCard'
import { signOut } from 'next-auth/react'
import { webUrl } from '@/app/fetchFunction/fetching'
import { TriggerContext } from '@/app/context/triggerContext'




const UserInfo = (user) => {

  
    const [users,setUsers]=useState([])
    const [trigger,setTrigger]=useState(false)
  const [apiLimitContext,setApiLimitContext]=useContext(TriggerContext)
   
    const getUsers=async()=>{
      
        try {
            const res=await fetch(`${webUrl}/api/users`);
            setUsers(await res.json())
        } catch (error) {
            
        }
      }
      useEffect(()=>{
        getUsers()
       
        
    },[users.length,trigger,apiLimitContext])

      
  return (
    <div className='h-full flex flex-col gap-5 py-2 items-center'>
      <h1 className='text-2xl font-bold'>Users</h1>
      {users.length>0 && 
        <div className='flex flex-col gap-4'>
          {users.map((user,i)=>
          
          <UserCard user={user} setTrigger={setTrigger}  key={i}/>
          
          )}
        </div>
      }
       <button className='bg-gray-400 p-2 px-5 hover:opacity-80 absolute top-0 text-xs md:text-base right-0 rounded-full m-5 text-center' onClick={()=>signOut()}>Logout</button>
    </div>
  )
}

export default UserInfo