import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import home from '/img/home.png'

const Calori = () => {
  return (
    <div>
        <Navbar/>
        <div className='pb-60 bg-second pt-20 flex justify-center flex-col items-center'>
            <h1>Caloriest Burn Prediction</h1>
            <img src={home} alt="" className='w-1/2'/>
            <p></p>
        </div>
        <Footer/>
    </div>
  )
}

export default Calori