import React from 'react'

const Navbar = () => {
  return (
        <div className='backdrop-blur-sm bg-second/5 flex justify-center gap-10 py-2 mb-32 fixed w-full'>
            <div>
                <h1 className='font-bold text-light hover:text-primary transition ease-in-out delay-150 hover:scale-110 duration-200'>
                    <a href="#">Home</a>
                </h1>
            </div>
            <div>
                <h1 className='font-bold text-light hover:text-primary transition ease-in-out delay-150 hover:scale-110 duration-200'>
                    <a href="/project">Project</a>
                </h1>
            </div>
            <div>
                <h1 className='font-bold text-light hover:text-primary transition ease-in-out delay-150 hover:scale-110 duration-200'>
                    <a href="/blog">Blog</a>
                </h1>
            </div>
        </div>
  )
}

export default Navbar