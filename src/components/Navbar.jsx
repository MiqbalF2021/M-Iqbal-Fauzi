import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
        <div className='flex justify-center bg-bg gap-5 py-1 fixed w-full'>
            <div>
                <h1 className='font-bold text-light text-xs lg:text-sm hover:text-primary transition ease-in-out delay-150 hover:scale-110 duration-200'>
                    <Link to="/">Home</Link>
                </h1>
            </div>
            <div>
                <h1 className='font-bold text-light text-xs lg:text-sm hover:text-primary transition ease-in-out delay-150 hover:scale-110 duration-200'>
                    <Link to="/project">Project</Link>
                </h1>
            </div>

        </div>
  )
}

export default Navbar