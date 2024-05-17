import React from 'react'

const Navbar = () => {
  return (
        <div className='bg-neutral-800 flex justify-center gap-10 py-5 text-neutral-200 fixed w-full'>
            <div>
                <h1 className='font-bold hover:text-amber-400'>
                    <a href="/home">Home</a>
                </h1>
            </div>
            <div>
                <h1 className='font-bold hover:text-amber-400'>
                    <a href="/about">About me</a>
                </h1>
            </div>
            <div>
                <h1 className='font-bold hover:text-amber-400'>
                    <a href="/project">Project</a>
                </h1>
            </div>
        </div>
  )
}

export default Navbar