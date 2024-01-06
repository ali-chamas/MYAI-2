import React from 'react'

const page = () => {
  return (
    <div className='w-full  flex flex-col gap-10 items-center justify-between pl-10 lg:pl-20 py-5'>

        <h1 className='hero_font text-2xl font-extrabold'>Welcome to MYAI Guide!</h1>
        <div className='flex flex-col px-10 bg-slate-900/50 py-5'> 

        
        <p>My Ai is an artificial intelligence companion to help you slove problems, and enjoy a bit!
        First you will have a free tier subscription which allows 5 usages only, so you can benefit from our services 5 times only!
        So we recommend that you subscribe to our premium plan where you will have unlimited access to each of our tool.</p>
        <br /><br />
        <p>Code Generator: Type your ideal problem in the input then select the arrow button , then Ai will think fot  bit then give you an answer, if it took so long just be patient it's normal</p>
        <br />
        <p>Image generator: type your ideal image idea in the input then press the arrow button , then ai will think a bit annd then post the image you want, you can download it as well!</p>
        <br />
        <p>
            Quiz generator: type your idealquiz idea in the input, choose how many questions you would like , then ai will think a bit annd then make the best quiz for you to enjoy trying an solving it!
        </p>
        </div>
    </div>
  )
}

export default page