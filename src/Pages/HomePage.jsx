import React from 'react'
import NavBar from '../Components/NavBar'
import HeroSection from '../Components/HeroSection'

import Footer from '../Components/Footer'
const HomePage = () => {
  return (
    <div className='h-screen w-full flex flex-col'>
      <NavBar/>
      <HeroSection/>
      <Footer/>
    </div>
  )
}

export default HomePage