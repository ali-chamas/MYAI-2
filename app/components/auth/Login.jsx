'use client'
import { signIn} from 'next-auth/react'
import React from 'react'
import {AiFillGithub,AiOutlineGoogle} from 'react-icons/ai'
const Login = () => {


  const GithubLogin=(e)=>{
    e.preventDefault();
    signIn('github');
    
  }
  const GoogleLogin=(e)=>{
    e.preventDefault();
    signIn('google');
  }
  
  return (
    
    <div className=' border-2 bg-slate-950 bg-opacity-40 border-red-300 rounded-2xl p-4 px-10 shadow-md shadow-orange-200 max-w-[700px]  z-50 backdrop-filter backdrop-blur-lg  '>
      <h2 className='hero_font text-2xl mb-5 md:text-3xl lg:text-4xl'>Choose Login Option</h2>

      <div className='flex flex-col gap-5  items-center my-8  md:text-lg'>

          <button className='flex gap-2 items-center py-5 px-7 border text-black bg-white shadow-md hover:opacity-90 rounded-md' onClick={(e)=>GoogleLogin(e)}>

          <p className='font-bold '>Sign in with Google</p>
            <AiOutlineGoogle className='text-2xl md:text-3xl lg:text-4xl'/>
          </button>
        
          <button className='flex gap-2 items-center py-5 px-7 border text-white bg-black shadow-md hover:opacity-90 rounded-md' onClick={(e)=>GithubLogin(e)}>

          <p className='font-bold '>Sign in with Github</p>
            <AiFillGithub className='text-2xl md:text-3xl lg:text-4xl'/>
          </button>
        

      </div>
        
      
      </div>
  )
}

export default Login
