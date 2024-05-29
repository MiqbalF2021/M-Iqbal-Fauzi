import React from 'react'
import github from '../assets/images/github2.png'
import linkedin from '../assets/images/linkedin.png'
import wa from '../assets/images/social.png'

const Footer = () => {
  return (
    <div className='bg-bg flex flex-col justify-center'>
        <div className='bg-bg flex flex-col lg:flex-row gap-5 justify-center pt-14 pb-20 px-10 lg:px-20'>
        <div className='w-1/2'>
            <h1 className='text-primary text-base font-bold'>Get in Touch</h1>
            <p className='text-light text-xs'>Interested to hiring me? please send email to <a className='text-primary underline' href="">miqbalfauzi000@gmail.com</a></p>
            <div className='flex gap-3 mb-7 mt-5'>
              <a href="https://github.com/MiqbalF2021" target='_blank'>
                <img src={github} alt="github" className='w-4 h-4'/>
              </a>
              <a href="https://www.linkedin.com/in/muhamad-iqbal-fauzi-fz/" target='_blank'>
                <img src={linkedin} alt="linkedin" className='w-4 h-4'/>
              </a>
              <a href="https://wa.me/+6285162890411?text=Hello" target='_blank'>
                <img src={wa} alt="whatsapp" className='w-4 h-4'/>    
              </a>
               

            </div>
        </div>
        <div className='w-1/2'>
            <h1 className='text-primary text-base font-bold'>Address</h1>
            <p className='text-light text-xs'>West Bandung, West Java, Indonesia</p>
        </div>
    </div>
    <div>
        <h1 className='text-light text-xs text-center mb-2 opacity-35'>All Rights Reserved © 2024 - by Muhamad Iqbal Fauzi</h1>
    </div>
    </div>
    
  )
}

export default Footer