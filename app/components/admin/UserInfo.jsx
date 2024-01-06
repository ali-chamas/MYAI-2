'use client'
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import { signOut } from 'next-auth/react'




const UserInfo = (user) => {

  const webUrl='https://merry-narwhal-231aae.netlify.app'
    const [users,setUsers]=useState([])
    const [trigger,setTrigger]=useState(false)

   
    const getUsers=async()=>{
      
        try {
            const res=await fetch(`${webUrl}/api/users`);
            setUsers(await res.json())
        } catch (error) {
            
        }
      }
      useEffect(()=>{
        getUsers()
        console.log('done')
        
    },[users.length,trigger])

      
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