'use client'
import React, { useContext, useEffect, useState } from 'react'
import UserCard from './UserCard'
import { signOut } from 'next-auth/react'
import { webUrl } from '@/app/fetchFunction/fetching'
import { TriggerContext } from '@/app/context/triggerContext'
import AdminInfo from './AdminInfo'
import Link from 'next/link'




const UserInfo = () => {

  
    const [users,setUsers]=useState([])
    const[filteredUsers,setFilteredUsers]=useState(users)
    const [trigger,setTrigger]=useState(false)
  const {apiLimitContext,setApiLimitContext}=useContext(TriggerContext)
   const [countTrigger,setCountTrigger]=useState(false)
    const getUsers=async()=>{
      
        try {
            const res=await fetch(`${webUrl}/api/users`);
            const data=await res.json()
            setUsers(data)
            setFilteredUsers(data)
            setCountTrigger(t=>!t)
        } catch (error) {
            
        }
      }

      useEffect(()=>{
        getUsers()
        
       
        
    },[users.length,trigger,apiLimitContext])

    const searchUser=(e)=>{
      if(e===''){
        setFilteredUsers(users)
      }else
      setFilteredUsers(u=>u.filter(user=>user.name.toLowerCase().includes(e)))
    }
      
  return (
    <div className='flex flex-col md:flex-row items-center gap-10 md:justify-around px-20'>
      <div className=''>
      <AdminInfo users={users} trigger={countTrigger}/>
      </div>
    
    <div className='h-full flex flex-col min-h-[600px] gap-3 py-2 items-center'>
      <div className='flex gap-2 items-center'>
      
      <p> total users: <span className='text-slate-200'>{users.length}</span></p>
      </div>
      <input type="search" className='bg-slate-700 p-3 oultline-none ' placeholder='search..' onChange={(e)=>searchUser(e.target.value)}  name="" id="" />
      {users.length>0 && 
        <div className='flex w-full flex-col gap-4 max-h-[500px] overflow-auto'>
          {filteredUsers.map((user,i)=>
          
          <UserCard user={user} setTrigger={setTrigger}  key={i}/>
          
          )}
        </div>
      }
       <button className='bg-gray-400 p-2 px-5 hover:opacity-80 absolute top-0 text-xs md:text-base right-0 rounded-full m-5 text-center' onClick={()=>signOut()}>Logout</button>
       <Link href={'/dashboard'} className='bg-gray-400 p-2 px-5 hover:opacity-80 absolute top-0 text-xs md:text-base cursor-pointer left-0 rounded-full m-5 text-center' >dashboard</Link>
    </div>
    </div>
  )
}

export default UserInfo