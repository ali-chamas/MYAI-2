'use client'
import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Input = ({method,color,loading,input,setInput,placeholder}) => {
   
    
  return (
    <div className='flex items-center justify-between w-full lg:w-[80%] xl:w-[60%] bg-slate-600 rounded-xl shadow-md '> 
    <input  type="text" placeholder={placeholder} className='w-full  p-3 bg-transparent outline-none placeholder:text-gray-300' value={input} onChange={(e)=>setInput(e.target.value)}/>

    
    <button className={`bg-gradient-to-r from-slate-600 to-${color}-700 p-3 px-7 rounded-r-xl shadow-md hover:opacity-70 text-2xl md:text-3xl font-extrabold disabled:opacity-80`} disabled={loading}  onClick={()=>method(input)}><BsArrowRight/></button>

    
    </div>
  )
}

export default Input