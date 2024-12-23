import React from 'react'
import github from '../assets/images/github2.png'
import linkedin from '../assets/images/linkedin.png'
import wa from '../assets/images/social.png'
import iqbal from '../assets/images/iqbal.png'


const Header = () => {
  return (
    <div className=' bg-gradient-to-t from-bg from-10% to-second to-99% flex flex-col lg:flex-row md:flex-row xl:flex-row lg:pt-10'>  
        <div className='pt-20 lg:px-20 px-10 lg:w-1/2 md:w-1/2'>
            <p className='font-medium text-xs text-light lg:text-sm md:text-sm xl:text-base'>Hello, I am Muhamad <span className='text-primary'>Iqbal</span> Fauzi</p>
            <h1 className='font-bold text-xl text-light lg:text-2xl md:text-2xl xl:text-3xl '><span className='text-primary'>Frontend Developer</span> <span className='font-light'>|</span> Informatics Undergraduate Student</h1>
            <hr className='w-1/4 text-primary mt-2 mb-5'/>
            <p className='text-xs text-light font-light mb-2 lg:text-sm md:text-sm xl:text-base'>I am an Informatics Undergraduate student at UIN SGD Bandung. I am interested in and learning about frontend developers. Previously, I had been involved in web development projects during my studies. I am very enthusiastic about applying my knowledge and skills in the professional world!</p>
            <div className='flex gap-3 mb-7'>
              <a href="https://github.com/MiqbalF2021" target='_blank'>
                <img src={github} alt="github" className='w-6 h-6'/>
              </a>
              <a href="https://www.linkedin.com/in/muhamad-iqbal-fauzi-fz/" target='_blank'>
                <img src={linkedin} alt="linkedin" className='w-6 h-6'/>
              </a> 
              <a href="https://wa.me/+6285162890411?text=Hello" target='_blank'>
                <img src={wa} alt="whatsapp" className='w-6 h-6'/>
              </a>
                
            </div>
            <a 
            href="\public\muhamah-iqbal-fauzi.pdf"
            download="muhamad-iqbal-fauzi.pdf"
            >
            <button className='bg-primary text-white text-sm px-2 py-1 rounded mb-5 font-medium text-bg hover:bg-second hover:text-primary transition ease-in-out delay-150 :-translate-y-1 hover:scale-110 duration-300'>Download CV</button>
            </a>
            
        </div>
        <div className='pt-20 flex flex-col justify-center items-center lg:w-1/2 md:w-1/2 bottom-0'> 
            <img src={iqbal} alt="iqbal" className='w-1/2 lg:w-80 md:w-80 self-center items-center xl:w-96'/>
        </div>
    </div>

  )
}

export default Header