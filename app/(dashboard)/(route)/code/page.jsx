import CodeBody from '@/app/components/dashboard/codeComponents/CodeBody';
import PageDesign from '@/app/components/dashboard/routes/PageDesign'
import React from 'react'
import { FaCode } from "react-icons/fa";

const page = () => {
  



  return (
    <div className=' w-full  flex flex-col gap-5 items-center justify-between pl-10 lg:pl-20 py-5 '>
    
      <PageDesign title={"Code Generator"} icon={<FaCode/>} desc={"Let's solve probems!"} color={"bg-pink-700"} />
      <div className='w-full'>
      <CodeBody toColor={"to-pink-700"} placeholder={"generate the sum of an array"} />
      </div>
      
    </div>
  )
}

export default page