import React from 'react'
import Navbar from '../Home/Navbar'
import Hero from '../Home/Hero'
import FormDetail from '../Home/FormDetail'
import About from '../Home/About'
import Skills from '../Home/Skill'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <FormDetail/>
        <About/>
        <Skills/>
    </div>
  )
}

export default Home