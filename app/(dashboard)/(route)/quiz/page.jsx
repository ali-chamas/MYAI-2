import QuizzBody from '@/app/components/dashboard/QuizzComponents/QuizzBody'
import PageDesign from '@/app/components/dashboard/routes/PageDesign'
import React from 'react'
import {MdQuiz} from 'react-icons/md'
const page = () => {
  return (
    <div className=' w-full  flex flex-col gap-5 items-center justify-between pl-10 lg:pl-20 py-5 '>
     <PageDesign color={'bg-yellow-500'} title={"Quiz Generator"} icon={<MdQuiz/>} desc={"Let's make a quick quiz !"} />
     <div className='w-full'><QuizzBody placeholder={"a coding quizz in Python"} toColor={"to-yellow-500"}/></div>
    </div>
  )
}

export default page