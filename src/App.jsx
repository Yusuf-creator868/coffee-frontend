import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Menu from './Components/Menu'
import Testimonials from './Components/Testimonials'
import Stickers from './Components/stickers'
// import Footer from './Components/Footer'
import { randomValue } from './RandomCode'






function App() {

  useEffect(()=> {
    if(localStorage.getItem('cart_code') === null){
      localStorage.setItem('cart_code', randomValue)
    }
  }, [])


  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <Menu/>
      <Stickers/>
      <Testimonials/>
      {/* <Footer/> */}

    </div>
  )
}

export default App
