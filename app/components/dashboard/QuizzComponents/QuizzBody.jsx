'use client'
import React, { useEffect, useState } from 'react'
import Input from '../routes/Input'
import DashboardImage from '../DashboardImage'
import { Loader } from '../../Loader'
import { IoMdRefresh } from 'react-icons/io'


const QuizzBody = ({toColor,placeholder}) => {
    const [input,setInput]=useState('')
    const [loading,setLoading]=useState(false)
    const [quizzResponse,setQuizzResponse]=useState('')
    const [quizzArray,setQuizzArray]=useState([])
    const [quizzIndex,setQuizzIndex]=useState(0)
    const [result,setResult]=useState(0)
    const [displayResult,setDisplayResult]=useState(false)
    const [nextError,setNextError]=useState(false)
    const [selectedChoice,setSelectedChoice]=useState('')    
    const [checkResultColor,setCheckResultcolor]=useState(false)
    const [disableCheck,setDisableCheck]=useState(true)
    const [error,setError]=useState(false)
    const [numberOfQuestions,setNumberOfQuestions]=useState(5)
    
    useEffect(()=>{
        if(quizzResponse){
        try{
            setQuizzArray(JSON.parse(quizzResponse))
            setQuizzResponse('')
            setError(false)
    }catch(err){
        setError(true);
    }
        
}
    },[quizzResponse])


    const generateQuizz=async(prompt)=>{

        
        setCheckResultcolor(false);
        setQuizzArray([]);
        setQuizzIndex(0);
        setResult(0)
        setSelectedChoice('')
        const newPrompt=`${prompt}  of ${numberOfQuestions} questions`
        try {
          setLoading(true);
          const res = await fetch(`/api/quizz`
          ,{method:"POST",headers:{'Content-Type': 'application/json',},body:JSON.stringify(newPrompt)}
          
          
          )
          
         if(res.ok){
          console.log('okay')
          const data =await res.json()
          console.log(data)
          setQuizzResponse(data.content)
          
          
         }
         
        } catch (error) {
          console.log(error)
        }
        setInput("")
        setLoading(false)
      }

      const nextQuestion=()=>{
        if(selectedChoice ==='' || disableCheck || !checkResultColor){
            setNextError(true);
            return
        }
        else{
        if(quizzIndex<quizzArray.length-1)
            setQuizzIndex(index=>index+1)
        else{
            setQuizzIndex(0)
            setDisplayResult(true)
            
        }
        setCheckResultcolor(false)
        setSelectedChoice('')
        setDisableCheck(true)
        setNextError(false)
    }
      }
      const retryQuizz=()=>{
        setDisplayResult(false)
        setResult(0)
        
      }

      const checkResult=(solution)=>{
        setCheckResultcolor(true)
    
        if(selectedChoice==solution && !checkResultColor){
            setResult(e=>e+(100/quizzArray.length));
            

        }
        
      }

      const select=(selected)=>{
        setDisableCheck(false)
        if(!checkResultColor)
        setSelectedChoice(selected)
      }
      
      const reset=()=>{

        setInput("");
        setDisableCheck(false)
        setSelectedChoice('')
        setResult(0)
        setQuizzArray([]);
        setQuizzIndex(0);
        setQuizzResponse('')
        
        }
     
      
  return (
    <div className='w-full flex flex-col items-center gap-5 '>
        <Input input={input} setInput={setInput}  toColor={toColor } method={generateQuizz} loading={loading} placeholder={placeholder}/>
        
        <div className='flex gap-3 items-center'>
            <p>how many questions? </p>
        <select  className=' outline-none cursor-pointer hover:opacity-90  p-2 px-4 bg-slate-600' defaultValue={5} onChange={(e)=>setNumberOfQuestions(e.target.value)}>
            <option value="5" >5</option>
            <option value="10">10</option>
            <option value="15">15</option>
        </select>
        </div>
        

        {quizzArray.length ==0  && !loading  &&  <div className='-z-10'><DashboardImage/></div>}
      { loading && <div className='-z-10'  ><Loader/></div> }
      
    {quizzArray.length >=1 && !loading &&

        

                    <div className='bg-slate-600  p-3 rounded-lg flex flex-col items-center gap-5 shadow-lg w-full lg:w-[60%] text-center '>
                        {!displayResult ?
                        
                        <div className=' flex flex-col items-center gap-3 w-full'>
                            <h1 className='font-bold'>Question {quizzIndex+1}/{quizzArray.length}</h1>
                        <h2>{quizzIndex+1}- {quizzArray[quizzIndex].question}</h2>
                        <div>
                            <div className='grid gap-2    items-center  '>
                        {quizzArray[quizzIndex].choices.map((choice,i)=>(
                            <p key={i} className={`bg-slate-800 min-w-[200px] lg:max-w-[350px] rounded-xl  w-full py-2 px-5 cursor-pointer hover:opacity-80 text-center ${(checkResultColor &&  choice==quizzArray[quizzIndex].solution) && 'bg-green-600' } ${checkResultColor && choice==selectedChoice && selectedChoice!=quizzArray[quizzIndex].solution  ? 'bg-red-600' : selectedChoice==choice && !checkResultColor && 'bg-slate-950 opacity-80' } `} onClick={()=>select(choice)}>{choice}</p>

                        ))}
                        </div>
                        
                        </div>
                        <div className='flex w-full justify-between  p-2 items-center'>
                            <button className={`py-2 px-5 bg-green-800 bg-opacity-80  rounded-xl hover:opacity-80 disabled:opacity-80 `} disabled={disableCheck}  onClick={()=>checkResult(quizzArray[quizzIndex].solution)}>
                                check
                            </button>
                            <button className='py-2 px-5 bg-yellow-600 bg-opacity-60  rounded-xl hover:opacity-80 '  onClick={nextQuestion}>
                                next
                            </button>
                        </div>
                        </div> :
                        
                            <div className='flex flex-col items-center gap-3'>
                                <h1 className='font-bold text-lg lg:text-2xl'>Quizz Results</h1>
                                <div className='bg-slate-800 border  p-3'>
                                    <h1 className='font-bold lg:text-lg'>{Math.round((result*10)/10)}/100</h1>
                                    
                                </div>
                                <small>Not happy with your result?</small>
                                <button className='bg-slate-800 hover:opacity-80 p-2 px-5 rounded-xl' onClick={retryQuizz}>
                                        Retry 
                                    </button>
                            </div>

                        }
                       {nextError &&
                        <p className=' pb-2'>
                            please make a choice first then check before continuing
                        </p>}
                        <button className="p-2 px-4 bg-pink-600/10  rounded-full hover:opacity-90 flex gap-1 items-center" onClick={reset}>Reset <IoMdRefresh/></button>
                    </div>
                    
                    
                  
       
        
    
    }
    {error && !loading &&
    <p >
        Please Try again later and make sure you ask for a valid quiz topic
        </p>}
 
    </div>
  )
}

export default QuizzBody