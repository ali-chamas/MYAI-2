'use client'
import React, { useContext, useEffect, useState } from 'react'
import Input from '../routes/Input'
import DashboardImage from '@/app/components/dashboard/DashboardImage'
import { useSession } from 'next-auth/react'
import { Loader } from '@/app/components/Loader';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { IoMdRefresh } from "react-icons/io";
import { AiFillCopy } from 'react-icons/ai'
import { TiTick } from "react-icons/ti";
import { fetchUser, webUrl } from '@/app/fetchFunction/fetching'
import { TriggerContext } from '@/app/context/triggerContext'
import axios from 'axios'

const CodeBody = ({toColor,placeholder}) => {
  const {apiLimitContext,setApiLimitContext}=useContext(TriggerContext);

    const [input,setInput]=useState('')
    const [loading,setLoading]=useState(false)
    
    const [copied,setCopied]=useState('')
    const [userDetails,setUserDetails]=useState(null);
  const [messages,setMessages]=useState([])
    const [trigger,setTrigger]=useState(false)
  const [tokens,setTokens]=useState(0)
  const [apiLimit,setApiLimit]=useState(0)
  const [subscribed,setSubscribed]=useState(false)
  const [banned,setBanned]=useState(false)
  const user=useSession()
  const fetchSession=async()=>{
      setUserDetails(await fetchUser(user.data.user.email))
     setTrigger(true)
  }
  

    const handleCopy=(copyUrl)=>{
        setCopied(copyUrl)
        navigator.clipboard.writeText(copyUrl)
        setTimeout(()=>setCopied(''),3000);
      }
      
      console.log(messages)
    const generateCode=async(userInput)=>{
       
       
        const userMessage = {role:'user',content:input};
        
        const newMessages=[...messages,userMessage]
        
        try {
          setLoading(true);

          if(apiLimit<5&&!banned || subscribed&&!banned){
         
            const res = await axios.post('/api/code', { messages: newMessages });
         
          
          
          const data =await  res.data
          setMessages((current) => [...current, userMessage, data.choices[0].message])
         if(res.ok){
          
          setTokens(t=>t+data.usage.total_tokens)
          setApiLimit(a=>a+1)
          
          
         }
         }
         else{
          alert('sorry limit exceeded')
         }
         
        } catch (error) {
          console.log(error)
        }
        
        setInput("");
        setLoading(false)
      }


    const reset=()=>{

    setInput("");
    setMessages([]);
    
    }
    useEffect(()=>{
      if(user.status=='authenticated')
     fetchSession()
     
     
    
    },[user.status,apiLimitContext])
    
     useEffect(()=>{
      if(userDetails){
      setTokens(userDetails.user.tokens_used)
      setApiLimit(userDetails.user.api_limit)
      setSubscribed(userDetails.user.subscribed)
      setBanned(userDetails.user.banned)
      }
    },[trigger])
    useEffect(()=>{
      if(userDetails){
      
      setBanned(userDetails.user.banned)
      }
    },[apiLimitContext])
    
    useEffect(()=>{
      if(userDetails){
      editTokens(tokens,userDetails.user._id)
      
      }
    },[tokens])

    const editTokens = async(tokens,id)=>{
      
      
        try {
          const res = await fetch(`${webUrl}/api/users?id=${id}`,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify({"tokens_used":tokens,"api_limit":apiLimit})})
         
          if(res.ok){
            setApiLimitContext(a=>!a)
            
          }
        } catch (error) {
          console.log(error)
        }
       
      
    
      
    }
    

  return (
    <div className='w-full flex flex-col items-center gap-5 '>
        <Input input={input} setInput={setInput}  toColor={toColor } method={generateCode} loading={loading} placeholder={placeholder}/>
        {messages.length ==0 && !loading  &&  <div className='-z-10'><DashboardImage/></div>}
      {messages.length==0 && loading && <div className='-z-10'  ><Loader/></div> }

      {

messages.length >=1 && 


<div className='flex flex-col-reverse gap-y-4 items-center  md:min-w-[500px] w-auto max-w-full  '>


{messages.map(data=>(
  
  
  data.role =='assistant'? 
  
  <div key={data.content} className='flex gap-3 w-full overflow-auto bg-slate-900 rounded-xl p-3'>
        <Image width={40} height={40} alt='ai' className='rounded-full max-w-[40px] max-h-[40px]' src={'/logo.png'}/>
        <div>
            
            <ReactMarkdown components={{
                  pre: ({ node, ...props }) => (
                    <div className="overflow-auto flex items-start justify-between  my-2 bg-black/10 p-2 rounded-lg">
                      <pre {...props} />
                        
                      <button key={props.index} className=' right-0 top-0 bg-slate-950 rounded-full p-2 hover:opacity-80 ' onClick={()=>handleCopy(props.children[0].props.children[0])}>
                        {
                            copied==props.children[0].props.children[0] ? <TiTick /> :<AiFillCopy/>
                        }
                        
                        
                        </button>
                      
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