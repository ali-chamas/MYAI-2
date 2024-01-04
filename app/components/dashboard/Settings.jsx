import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import SettingsLogic from './SettingsLogic'
const Settings = ({setOpen}) => {
  return (
  

<div className='fixed top-0 left-0 h-screen  w-full bg-gray-900 bg-opacity-40 backdrop-blur-md backdrop-filter flex items-center justify-center z-50'>

<div className='bg-slate-800 max-w-[400px] h-auto p-5 opacity-100  rounded-lg shadow-sm shadow-orange-300  z-50'>
    <div className='relative top-0 left-[80%] cursor-pointer hover:opacity-80 mb-3 text-2xl md:text-3xl  max-w-[40px] ' onClick={()=>setOpen(false)}><AiOutlineClose/></div>
        
           <SettingsLogic/>
        
</div>

</div>

    )}
   
  


export default Settings
