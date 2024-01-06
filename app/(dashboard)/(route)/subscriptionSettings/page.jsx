import React from 'react'

const page = () => {
  return (
    <div className='w-full  flex flex-col gap-10 items-center justify-center h-screen pl-10 lg:pl-20 py-5'>
    <div className='bg-slate-900 shadow-md text-center shadow-yellow-400 p-5 rounded-2xl flex flex-col   items-center gap-5'>
    <h2 className='font-extrabold text-2xl hero_font'>premium  plan</h2>
        <div className='bg-slate-800 px-4 rounded-lg py-10'>
          <h1 className='text-xl font-bold'>$25.00</h1>
        </div>
        
        <ul className='flex flex-col gap-1 list-disc px-3'>
          <li>
            24/7 ai companion
          </li>
          <li>
            24/7 support 
          </li>
          <li>
            access to all the tools
          </li>
        </ul>
        <button className=' bg-gradient-to-tr from-orange-400 to-red-600 p-2 px-5 rounded-2xl hover:opacity-90  '>
          Subscribe now!
        </button>
    </div>

    <div>
      <b className='text-xl'>Disclaimer</b> <br />
      <p>Due to unexpected reason we would like to inform you that there are no current online payment method.</p>
    </div>
    </div>
  )
}

export default page