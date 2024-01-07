import React from 'react'
import { getServerSession } from "next-auth/next";
import { authoptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import UserInfo from '../components/admin/UserInfo';



   

 
const page =async () => {
  const session = await getServerSession(authoptions);
  if(!session){
    redirect('/login')
  }
   if(session.user.email!=process.env.ADMIN_EMAIL){
    redirect('/dashboard')
  }
  return (
    <div className='flex flex-col w-full items-center py-5 gap-5 '>
            <h1 className='text-2xl font-bold lg:text-4xl hero_font'>
                Hello Admin!
            </h1>
            <div className=' w-full '>
            <UserInfo/>
            
            </div>
            
           
            
    </div>
  )
}

export default page