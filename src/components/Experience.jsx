import React from 'react'
import findjob from '/img/find.png'

const Experience = () => {
  return (
    <div className='flex flex-col justify-center item-center bg-gradient-to-r from-second to-bg'>
        <h1 className='text-primary text-xs mt-4 mx-auto mb-3 lg:text-sm'>Experience</h1>
        <div className=' flex flex-col lg:flex-row md:flex-row justify-center item-center mb-6 gap-5 md:mx-10'>
            <div className='flex justify-center'>
                <img src={findjob} alt="ilustrasi" className='self-center w-72 opacity-70'/>
            </div>
            <div className='self-center mx-10'>
                <h1 className='text-light font-bold text-xl lg:text-2xl mx-auto mt-2 mb-2'>No prior professional experience</h1>
                <hr className='w-1/3 lg:w-1/3 text-primary self-center'/>
                <h2 className='text-light font-light text-sm lg:text-base mt-3 mx-auto mb-20'>Currently seeking first professional experience</h2>
            </div>
            
        </div>
    </div>
    
  )
}

export default Experience