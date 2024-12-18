import React from 'react'
import react from '../assets/images/react.png'
import javascript from '../assets/images/js.png'
import tailwind from '../assets/images/tailwind.png'
import git from '../assets/images/git.png'
import github from '../assets/images/github.png'

const Tech = () => {
  return (
    <div className='bg-gradient-to-r from-second to-bg flex flex-col justify-center item-center'>
        <h1 className='text-primary text-xs mt-3 self-center mb-3 lg:text-sm'>Technology & tools</h1>
        <div className='flex flex-row mx-10 justify-center items-center gap-5 mb-5'>
            <img src={react} alt="react js" className='w-8 lg:w-10'/>
            <img src={javascript} alt="javascript" className='w-8 lg:w-10'/>
            <img src={tailwind} alt="tailwind" className='w-8 lg:w-10'/>
            <img src={git} alt="tailwind" className='w-8 lg:w-10'/>
            <img src={github} alt="tailwind" className='w-8 lg:w-10'/>
        </div>
    </div>
  )
}

export default Tech