'use client'

import React, { useState } from 'react'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'


import Settings from './Settings'


const Profile = ({open}) => {
    
 const user = useSession()
 
const [openSettings,setOpenSettings]=useState(false)

let nameArray
if(user.status !=="loading"){
   nameArray= String(user.data.user.name).split(" ");
}

  return (
    
        <>
         
       {user.status=='authenticated' &&
            <div className='bg-slate-950  border-b border-red-200 py-4 '>
              

                <div className={`flex items-center ${!open ? 'justify-center' :'justify-between px-6'} w-full`}>
                  <div className='relative w-[57px]'>
                    <img src={user.data.user.image}  className='rounded-full shadow-md shadow-red-200 cursor-pointer hover:opacity-80 ' onClick={()=>setOpenSettings(true)}/>
                  </div>
                  {open &&
                  <button className='bg-slate-600 p-2 px-5 rounded-full hover:opacity-90' onClick={()=>signOut()}>sign out</button>
                  }
                  
                </div>
               
        
        
                
                
        
        </div>
       
    }
    {openSettings && <Settings setOpen={setOpenSettings}/>}
    </>
  )
}

export default Profile
