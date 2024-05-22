import React from 'react'
import react from '../assets/images/react.png'
import javascript from '../assets/images/js.png'
import express from '../assets/images/express.png'
import laravel from '../assets/images/laravel.png'
import sql from '../assets/images/sql.png'
import mongo from '../assets/images/mongo.png'
import tailwind from '../assets/images/tailwind.png'

const Tech = () => {
  return (
    <div className='bg-gradient-to-r from-second to-bg flex flex-col justify-center item-center'>
        <h1 className='text-primary text-xs mt-3 self-center mb-3 lg:text-sm'>Tech Stack</h1>
        <div className='flex justify-center items-center gap-5 mb-5'>
            <img src={react} alt="react js" className='w-8 lg:w-10'/>
            <img src={javascript} alt="javascript" className='w-8 lg:w-10'/>
            <img src={express} alt="express" className='w-8 lg:w-10'/>
            <img src={laravel} alt="laravel" className='w-8 lg:w-10'/>
            <img src={sql} alt="sql" className='w-8 lg:w-10'/>
            <img src={mongo} alt="mongo" className='w-8 lg:w-10'/>
            <img src={tailwind} alt="tailwind" className='w-8 lg:w-10'/>
        </div>
    </div>
  )
}

export default Tech