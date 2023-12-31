import React from 'react'
import Navbar from '../Home/Navbar'
import Hero from '../Home/Hero'
import FormDetail from '../Home/FormDetail'
import About from '../Home/About'
import Skills from '../Home/Skill'
import MouseTracker from '../Home/MouseTracker'
import Slider from '../Home/Slider'
import {Subscribe} from '../Home/Subscribe'
import Footer from '../Home/Footer'
import Review from '../Home/Review'

const Home = () => {
  return (
    <div>
      <MouseTracker/>
        <Navbar/>
        <Hero/>
         <FormDetail/> 
        <About/>
        <Skills/>
        <Review/>
        <Subscribe/>
     
     
        <Footer/> 
       {/*  <Slider/>
       
        */}
    </div>
  )
}

export default Home