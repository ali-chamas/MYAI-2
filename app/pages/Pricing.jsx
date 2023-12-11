import React from 'react'

const Pricing = () => {
  return (
    <div className='h-full flex flex-col  items-center mt-10 md:mt-16 gap-5 mx-5' id='pricing'>
      <h1 className='hero_font text-5xl md:text-6xl lg:text-7xl h-28'>Pricing</h1>

      <div className=' border-2 bg-slate-900 border-red-300 rounded-2xl p-4 px-10 shadow-lg shadow-orange-200 max-w-[700px] bg-opacity-30 z-50 backdrop-filter backdrop-blur-lg'>
      <h2 className='hero_font text-2xl'>Subscription plan</h2>
      <p className='text-left'>
        MyAi offers one subscription plan only and it costs 25$ / month, after subscribing you will become a pro user, then you will have unlimited acces over all our features!
      </p>
        <h2 className='hero_font text-2xl'>Payment process:</h2>
        <p>We offer the option to pay with Stripe where you will manage your subscription as well.
          If your country doesn't support Stripe feel free to communicate with our suppourt team.
        
        </p>
        <h2 className='hero_font text-2xl'>Free Trial:</h2>
        <p>
          After creating an account you will have 5 free tokens, each token allows a one time usage of our features. After using all 5 tokens you will be required to subscribe to our plan to become a pro user.
        </p>
        
      
      </div>
    </div>
  )
}

export default Pricing
