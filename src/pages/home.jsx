import React from 'react'
import Header from '../components/Header'
import Tech from '../components/Tech'
import Projects from '../components/Project'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='scroll-smooth'>
      <Navbar/>
      <Header/>
      <Tech/>
      <Projects/>
    </div>
  )
}

export default Home