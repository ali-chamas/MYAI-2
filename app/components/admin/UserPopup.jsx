'use client'
import { webUrl } from '@/app/fetchFunction/fetching';
import React from 'react'

const UserPopup = ({user,setOpenPopup,setTrigger}) => {

  
  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  function formatDate(date) {
    var date= new Date(date)
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  }


  const editSubscription = async(banned,tokens_used,id,subscribe)=>{
      const confirmed = confirm('are you sure ?')
      if(subscribe){
        var subscribedAt=new Date();
      }
      else{
        var subscribedAt=null;
      }
      if(confirmed){
        try {
          const res = await fetch(`${webUrl}/api/users?id=${id}`,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify({"subscribed":subscribe,"banned":banned,"tokens_used":tokens_used,"subscribedAt":subscribedAt})})
         
          if(res.ok){
            alert('updated')
            setTrigger(t=>!t)
          }
        } catch (error) {
          
        }
       
      }

      
  }

  const editBan = async(banned,tokens_used,id,subscribe)=>{
    const confirmed = confirm('are you sure ?')

    if(confirmed){
      try {
        const res = await fetch(`${webUrl}/api/users?id=${id}`,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify({"subscribed":subscribe,"banned":banned,"tokens_used":tokens_used})})
      
        if(res.ok){
          alert('banned or unbanned')
          setTrigger(t=>!t)
        }
        
      } catch (error) {
        console.log(error)
      }
     
    }
  }
  
    const deleteUser = async(id)=>{
      const confirmed = confirm('are you sure ?')
  
      if(confirmed){
        try {
          const res = await fetch(`${webUrl}/api/users?id=${id}`,{method:"DELETE"})
         
          if(res.ok){
            alert('deleted')
            setTrigger(t=>!t)
          }
          
        } catch (error) {
          console.log(error)
        }
       
      }}

    




  return (
    <div className='h-screen w-screen flex items-center justify-center fixed top-0 bg-slate-800 bg-opacity-30 backdrop-filter backdrop-blur-lg  lg:text-lg z-50'>

        <div className={`flex items-center md:p-10 relative p-5 rounded-2xl ${user.banned ? 'bg-red-900': ' bg-slate-900'}`}>
            <div className='flex flex-col md:flex-row gap-3'>
              <div className=' flex flex-col gap-3'>

              
                <img src={user.image} className='w-[100px] h-[100px] rounded-full self-center' alt="" />

                <h2 className='text-lg'>{user.name}</h2>
                <small className='text-gray-300'>{user.email}</small>
                </div>
                <div className=' flex flex-col gap-3'>
                {!user.subscribed ?
                <div className='flex w-full justify-between px-2 items-center'>
                  <p>not subscribed</p>
                  <button className='bg-gray-400 px-2 hover:opacity-80' onClick={()=>editSubscription(user.banned,user.tokens_used,user._id,true)}>+</button>
                </div>
                 :
                 <div className='flex w-full justify-between px-2 items-center'>
                  <p>subscribed</p>
                  <button className='bg-gray-400 px-2 hover:opacity-80' onClick={()=>editSubscription(user.banned,user.tokens_used,user._id,false)}>-</button>
                </div>
                  }
                {!user.subscribed ? <small className='text-gray-300'>free usage left : {user.api_limit}</small> : 
                <small className='text-gray-300'>subscribtion started : {formatDate(user.subscribedAt)}</small>
                } 
                <small className='text-gray-300'>tokens used: {user.tokens_used}</small>


                <small className='text-gray-300'>since: {formatDate(user.createdAt)}</small>

                <div className='flex self-center items-center justify-between text-base gap-3 w-full px-2 py-3'>
                  {user.banned? <button className='bg-gray-400 p-2 px-5 text-green-800 rounded-full   hover:opacity-80' onClick={()=>editBan(false,user.tokens_used,user._id,user.subscribed,user.subscribedAt)}>unban</button>:<button className='bg-gray-400 p-2 px-5 text-red-800 rounded-full   hover:opacity-80' onClick={()=>editBan(true,user.tokens_used,user._id,user.subscribed,user.subscribedAt)}>ban</button>}
                  <button className='bg-red-500 p-2 px-5 text-white rounded-full hover:opacity-80' onClick={()=>deleteUser(user._id)}>delete</button>
                </div>
                </div>
            </div>
            
            <button onClick={()=>setOpenPopup(false) } className='absolute text-xl top-0 p-3 right-0'>X</button>
        </div>
        
    </div>
  )
}

export default UserPopup