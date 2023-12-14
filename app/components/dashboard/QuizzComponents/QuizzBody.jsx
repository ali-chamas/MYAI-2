'use client'
import React, { useState } from 'react'
import Input from '../routes/Input'
import DashboardImage from '../DashboardImage'
import { Loader } from '../../Loader'
import ReactMarkdown from 'react-markdown'

const QuizzBody = ({toColor,placeholder}) => {
    const [input,setInput]=useState('')
    const [loading,setLoading]=useState(false)
    const [quizzArray,setQuizzArray]=useState()

    const generateQuizz=async(prompt)=>{

        try {
          setLoading(true);
          const res = await fetch(`/api/quizz`
          ,{method:"POST",headers:{'Content-Type': 'application/json',},body:JSON.stringify(prompt)}
          
          
          )
          
         if(res.ok){
          console.log('okay')
          const data =await res.json()
          console.log(data)
          setQuizzArray(data)
          
         }
         
        } catch (error) {
          console.log(error)
        }
        setInput("")
        setLoading(false)
      }
      
console.log(JSON.parse(quizzArray.content))
  return (
    <div className='w-full flex flex-col items-center gap-5'>
        <Input input={input} setInput={setInput}  toColor={toColor } method={generateQuizz} loading={loading} placeholder={placeholder}/>


        {!quizzArray  && !loading  &&  <div className='-z-10'><DashboardImage/></div>}
      { loading && <div className='-z-10'  ><Loader/></div> }
      
    {quizzArray && !loading &&
   
            <p>{quizzArray.content}</p>
        
    
    }
 
    </div>
  )
}

export default QuizzBody