import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-gradient-to-r from-second to-bg'>
        <div className='w-1/2'>
            <img src="" alt="" />
        </div>
        <div className='flex justify-end gap-10 py-5 pr-10 fixed w-full'>
            <div>
                <h1 className='font-bold text-light text-sm hover:text-primary transition ease-in-out delay-150 hover:scale-110 duration-200'>
                    <a href="/">Home</a>
                </h1>
            </div>
            <div>
                <h1 className='font-bold text-light text-sm hover:text-primary transition ease-in-out delay-150 hover:scale-110 duration-200'>
                    <a href="/project">Project</a>
                </h1>
            </div>
        </div>
    </div>
        
  )
}

export default Navbar