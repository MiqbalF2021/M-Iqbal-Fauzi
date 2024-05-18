import React from 'react'
import react from '../assets/images/structure.png'
import javascript from '../assets/images/javascript.png'
import express from '../assets/images/express.png'
import laravel from '../assets/images/laravel.png'

const Tech = () => {
  return (
    <div className='bg-gradient-to-r from-second to-bg flex flex-col justify-center item-center'>
        <h1 className='text-primary text-xs mt-3 self-center mb-3 lg:text-sm'>Tech Stack</h1>
        <div className='flex justify-center items-center gap-5 mb-5'>
            <img src={react} alt="react js" className='w-8 lg:w-10'/>
            <img src={javascript} alt="javascript" className='w-8 lg:w-10'/>
            <img src={express} alt="express" className='w-8 lg:w-10'/>
            <img src={laravel} alt="laravel" className='w-8 lg:w-10'/>
        </div>
    </div>
  )
}

export default Tech