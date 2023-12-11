'use client'
import { Loader } from '@/app/components/Loader'
import DashboardImage from '@/app/components/dashboard/DashboardImage'
import Image from 'next/image'

import React, { useState } from 'react'
import {BsImageFill,BsArrowRight,BsDownload} from 'react-icons/bs'
const page = () => {
  const [input,setInput]=useState("");
  const [image,setImage]=useState("");
  const [loading,setLoading]=useState(false);

  const generateImage=async(prompt)=>{

    try {
      setLoading(true);
      const res = await fetch(`/api/image`
      ,{method:"POST",headers:{'Content-Type': 'application/json',},body:JSON.stringify(prompt)}
      
      
      )
      
     if(res.ok){
      console.log('okay')
      
      setImage(await res.json())
      
     }
     
    } catch (error) {
      console.log(error)
    }
    setInput("")
    setLoading(false)
  }

 const resetImage=()=>{
  setImage("");
  setInput("")
 }

  return (
    <div className='w-full  flex flex-col gap-10 items-center justify-center mx-5 my-7 '>
      <div className='flex items-center  gap-2'>
        <BsImageFill className='text-6xl md:text-7xl text-white p-2 bg-pink-700 bg-opacity-40 rounded-xl'/>
        <div className='flex flex-col items-start  gap-1'>
      <h1 className='hero_font text-3xl lg:text-4xl xl:text-5xl text-center '>Image Generator </h1>
      <p className='text-white ml-2'>Let's generate cool images!</p>
      </div>
      </div>
      
      
      <div className='flex items-center justify-between w-full md:w-[50%] bg-slate-600 rounded-xl shadow-md '> 
      <input  type="text" placeholder='A cowboy driving a space ship' className='w-full md:w-[60%] p-3 bg-transparent outline-none placeholder:text-gray-300 ' value={input} onChange={(e)=>setInput(e.target.value)}/>

      
      <button className='bg-gradient-to-r from-slate-600 to-pink-700 p-3 px-7 rounded-r-xl shadow-md hover:opacity-70 text-2xl md:text-3xl font-extrabold disabled:opacity-80' disabled={loading}  onClick={()=>generateImage(input)}><BsArrowRight/></button>

      
      </div>


     {loading ?<div className='-z-10'  ><Loader/></div> :

      image? 
      
      
      <div className="flex flex-col items-center  gap-5">
        <div className='relative mt-20 md:mt-0  w-[250px] h-[250px] md:w-[350px] md:h-[350px] -z-20'>
      <Image  loader={() => image} src={image} fill alt='' className='z-0 rounded-[30%]'/>
      
      </div>
      <button className='p-2 px-6 flex gap-1 bg-slate-600  rounded-full hover:opacity-90' onClick={()=>window.open(image)}>Download <BsDownload/></button>
      <button className="p-2 px-4 bg-pink-600/10  rounded-full hover:opacity-90 " onClick={resetImage}> Generate another</button>
      </div>
      

      
      : 
        <div className='-z-10'><DashboardImage/></div>
      
      
      
    }
      

    </div>
  )
}

export default page
