import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import About from './About'
import Pricing from './Pricing'
import Footer from '../components/Footer'
const Hero = () => {
  return (
    <section className='min-h-screen  '> 
    
    <Navbar/>
    <HeroSection/>
    <About />
    <Pricing/>
    <Footer/>

    </section>
  )
}

export default Hero
