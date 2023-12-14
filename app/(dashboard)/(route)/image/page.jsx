import ImageBody from '@/app/components/dashboard/ImageComponents/ImageBody'
import PageDesign from '@/app/components/dashboard/routes/PageDesign'
import React from 'react'
import {BsImageFill} from 'react-icons/bs'
const page = () => {
  return (
    <div className=' w-full  flex flex-col gap-5 items-center justify-between pl-10 lg:pl-20 py-5 '>
      <PageDesign title={"Image Generator"} desc={"Let's create cool images! "} color={"bg-purple-600"} icon={<BsImageFill/>} />

      <div className='w-full'> <ImageBody /></div>

    </div>
  )
}

export default page