
import React from 'react'
import { getServerSession } from 'next-auth/next';
import { authoptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import Login from '../components/auth/Login';
import {BiArrowBack} from 'react-icons/bi'
import Link from 'next/link';


const page =async () => {

   const session = await getServerSession(authoptions);
   console.log(session)
    if(session){
        redirect('/dashboard')
    }
  return (
    <div className='w-full px-5 py-6'>
      <Link href={'/'} className='hover:opacity-80 '><BiArrowBack className='text-4xl  '/></Link>
      
      <div className='flex flex-col items-center justify-center h-[80vh]'>
      <Login/>
     
      </div>
      
    </div>
  )
}

export default page
