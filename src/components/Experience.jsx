import React from 'react'

const Experience = () => {
  return (
    <div className='flex flex-col justify-center item-center bg-gradient-to-r from-second to-bg'>
        <h1 className='text-primary text-xs mt-4 mx-auto mb-3 lg:text-sm'>Experience</h1>
        <div className=' flex flex-col lg:flex-row justify-center item-center mr-10'>
            <div className='w-1/2'>
                <img src="" alt="" />
            </div>
            <div className='w-1/2 ml-10'>
                <h1 className='text-light font-bold text-xl lg:text-2xl mx-auto mt-2 mb-2'>0 Experience in real work yet</h1>
                <hr className='w-1/3 lg:w-1/3 text-primary self-center'/>
                <h2 className='text-light font-light text-sm lg:text-base mt-3 mx-auto mb-20'>I am looking for experience and expand my experience</h2>
            </div>
            
        </div>
    </div>
    
  )
}

export default Experience