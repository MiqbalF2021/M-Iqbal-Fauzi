import React from 'react'
import github from '../assets/images/github.png'
import linkedin from '../assets/images/linkedin.png'
import instagram from '../assets/images/instagram.png'
import iqbal from '../assets/images/iqbal.png'

const Header = () => {
  return (
    <div className='bg-gradient-to-t from-bg from-10% to-second to-99% flex flex-col lg:flex-row md:flex-row xl:flex-row'>  
        <div className='pt-20 lg:px-20 px-10 lg:w-1/2 md:w-1/2'>
            <p className=' text-xs text-primary lg:text-sm md:text-sm xl:text-base'>Hello, My Name Is__</p>
            <h1 className='font-bold text-xl text-light lg:text-2xl md:text-2xl xl:text-3xl '>Muhamad <span className='text-primary'>Iqbal</span> Fauzi</h1>
            <hr className='w-1/4 text-primary mt-2 mb-2'/>
            <p className='text-xs text-light font-thin mb-2 lg:text-sm md:text-sm xl:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, quasi natus? Esse sint atque perspiciatis et minus quidem delectus sapiente illo, in consequatur quasi. Velit rerum quibusdam iure dolorum inventore.</p>
            <div className='flex gap-3 mb-5'>
                <img src={github} alt="github" className='w-4 h-4'/>
                <img src={linkedin} alt="linkedin" className='w-4 h-4'/>
                <img src={instagram} alt="instagram" className='w-4 h-4'/>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center lg:w-1/2 md:w-1/2 '> 
            <img src={iqbal} alt="iqbal" className='w-1/2 lg:w-80 md:w-80 self-center items-center xl:w-96'/>
        </div>
    </div>

  )
}

export default Header