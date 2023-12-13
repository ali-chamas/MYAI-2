'use client'
import React, { useState } from 'react'
import Input from '../routes/Input'
import DashboardImage from '@/app/components/dashboard/DashboardImage'
import { useSession } from 'next-auth/react'
import { Loader } from '@/app/components/Loader';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { IoMdRefresh } from "react-icons/io";

const CodeBody = ({color,placeholder}) => {

    const [input,setInput]=useState('')
    const [loading,setLoading]=useState(false)
    const [codeArray,setCodeArray]=useState([]);
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
    <div className='w-full flex flex-col items-center gap-5 '>
        <Input input={input} setInput={setInput} color={color } method={generateCode} loading={loading} placeholder={placeholder}/>
        {codeArray.length ==0 && !loading  &&  <div className='-z-10'><DashboardImage/></div>}
      {codeArray.length==0 && loading && <div className='-z-10'  ><Loader/></div> }

      {

codeArray.length >=1 && 


<div className='flex flex-col-reverse gap-y-4 items-center  md:min-w-[500px] w-auto max-w-full  '>


{codeArray.map(data=>(
  data!=undefined&&
  
  data.role =='assistant'? 
  
  <div key={data.content} className='flex gap-3 w-full overflow-auto bg-slate-900 rounded-xl p-3'>
        <Image width={40} height={40} alt='ai' className='rounded-full max-w-[40px] max-h-[40px]' src={'/logo.png'}/>
        <div>
            
            <ReactMarkdown components={{
                  pre: ({ node, ...props }) => (
                    <div className="overflow-auto  my-2 bg-black/10 p-2 rounded-lg">
                      <pre {...props} />
                    </div>
                  ),
                  code: ({ node, ...props }) => (
                    <code className="bg-black/10 overflow-auto rounded-lg p-1" {...props} />
                  )
                }} className="text-sm overflow-hidden leading-7">
                  {data.content || ""}
          </ReactMarkdown>
            
       
        </div>
    </div> :

    <div key={data.content} className='flex gap-3 w-full bg-slate-700 rounded-xl p-3'>
        {
        user.data ?  <img  alt='ai' src={ user.data.user.image} className='rounded-full min-w-[40px] w-[40px] min-h-[40px] h-[40px]' /> : <div className='rounded-full min-w-[40px] w-[40px] min-h-[40px] h-[40px] bg-slate-900'>
            
        </div>
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

export default CodeBody