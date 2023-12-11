'use client'
import DashboardImage from '@/app/components/dashboard/DashboardImage'
import { useSession } from 'next-auth/react'
import { FaCode } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import React, { useState } from 'react'
import {BsArrowRight} from 'react-icons/bs'
import { Loader } from '@/app/components/Loader';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
const page = () => {
  const [input,setInput]=useState("");
  const [codeArray,setCodeArray]=useState([]);
  
  
  const [loading,setLoading]=useState(false);
  
  const user = useSession();
 

  const generateCode=async(userInput)=>{
   
    const userMessage = {role:'user',content:input};
    
    
    try {
      setLoading(true);
     
      const res = await fetch(`/api/code`
      ,{method:"POST",headers:{'Content-Type': 'application/json',},body:JSON.stringify(userInput)}
     
      
      )
      const data = await res.json()
     if(res.ok){
      console.log('okay')
      
      setCodeArray((current)=>[...current,userMessage,data])
      
     }
     
    } catch (error) {
      console.log(error)
    }
    
    setInput("");
    setLoading(false)
  }

 const reset=()=>{
  
  setInput("");
  setCodeArray([]);
 
 }


  return (
    <div className='w-full  flex flex-col gap-10 items-center justify-center mx-5 py-7 '>
      <div className='flex items-center  gap-2'>
        <FaCode className='text-6xl md:text-7xl text-white p-2 bg-pink-700 bg-opacity-40 rounded-xl'/>
        <div className='flex flex-col items-start  gap-1'>
      <h1 className='hero_font text-3xl lg:text-4xl xl:text-5xl text-center '>Code Generator </h1>
      <p className='text-white ml-2'>Let's solve some problems!</p>
      </div>
      </div>
      
      
      <div className='flex items-center justify-between w-full md:w-[50%] bg-slate-600 rounded-xl shadow-md '> 
      <input  type="text" placeholder='A program in Java that sums two integers' className='w-full md:w-[60%] p-3 bg-transparent outline-none placeholder:text-gray-300' value={input} onChange={(e)=>setInput(e.target.value)}/>

      
      <button className='bg-gradient-to-r from-slate-600 to-pink-700 p-3 px-7 rounded-r-xl shadow-md hover:opacity-70 text-2xl md:text-3xl font-extrabold disabled:opacity-80' disabled={loading}  onClick={()=>generateCode(input)}><BsArrowRight/></button>

      
      </div>

      {codeArray.length ==0 && !loading  &&  <div className='-z-10'><DashboardImage/></div>}
      {codeArray.length==0 && loading && <div className='-z-10'  ><Loader/></div> }


     {

      codeArray.length >=1 && 
      
      
      <div className='flex flex-col items-center gap-3 px-5 max-w-full '>
      

      {codeArray.map(data=>(
        data!=undefined&&
        
        data.role =='assistant'? <div className='flex gap-3 w-full bg-slate-900 rounded-xl p-3'>
          <Image width={40} height={40} alt='ai' className='rounded-full max-w-[40px] max-h-[40px]' src={'/logo.png'}/>
          <div>
            
                 <ReactMarkdown  components={{
                  
                  pre: ({ node, ...props }) => (
                    <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                      <pre {...props} />
                    </div>
                  ),
                  code: ({ node, ...props }) => (
                    <code className="bg-black/10 rounded-lg p-1" {...props} />
                  )
                }} className="text-sm w-full overflow-hidden leading-7 ">
                  {data.content || ""}
                </ReactMarkdown>
            
          </div>
            </div> :
            <div className='flex gap-3 w-full bg-slate-700 rounded-xl p-3'>
              {
                user.data ?  <img  alt='ai' src={ user.data.user.image} className='rounded-full min-w-[40px] w-[40px] min-h-[40px] h-[40px]' /> : <div className='rounded-full min-w-[40px] w-[40px] min-h-[40px] h-[40px] bg-slate-900'></div>
              }
           
            <div>
              <p>
              {data.content}
              </p>
            </div>
              </div> 

      
              )

              )
        }

        {loading ? <div className='-z-10'  ><Loader/></div> :
        <button className="p-2 px-4 bg-pink-600/10  rounded-full hover:opacity-90 flex gap-1 items-center" onClick={reset}>Reset <IoMdRefresh/></button>
        }
        


      </div>
      

      
    
   
    }
      

    </div>
  )
}

export default page
