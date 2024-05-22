import React from 'react'
import Header from '../components/Header'
import Tech from '../components/Tech'
import Projects from '../components/Project'
import Navbar from '../components/Navbar'
import Experience from '../components/Experience'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='scroll-smooth'>
      <Navbar/>
      <Header/>
      <Tech/>
      <Projects/>
      <Experience/>
      <Footer/>
    </div>
  )
}

export default Home