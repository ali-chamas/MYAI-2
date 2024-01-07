import React, { useEffect, useState } from 'react'

const AdminInfo = ({users}) => {

    const [subscribed,setSubscribed]=useState(0)
    const [banned,setBanned]=useState(0)

    useEffect(()=>{
        for(let i =0;i<users.length;i++){
            if(users[i].subscribed){
                setSubscribed(s=>s+1)
            }
            if(users[i].banned){
                setBanned(b=>b+1)
            }
        }
    },[users.length])

  return (
    <div className='flex flex-col h-full gap-5 items-center'>
        <div className='flex flex-col gap-2 items-center'>
            <h2 className='text-lg font-bold'>Subscribed users:</h2>
            <p className='text-slate-200'>{subscribed}</p>
        </div>
        <div className='flex flex-col gap-2 items-center'>
            <h2 className='text-lg font-bold'>banned users:</h2>
            <p className='text-slate-200'>{banned}</p>
        </div>
    </div>
  )
}

export default AdminInfo