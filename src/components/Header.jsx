import React from 'react'
import linkedin from '../assets/images/linkedin.png'
import github from '../assets/images/github.png'
import instagram from '../assets/images/instagram.png'
import tiktok from '../assets/images/tiktok.png'
import rimuru from '../assets/images/Rimuru.png'

const Header = () => {
  return (
    <div>
        <header className='flex justify-center gap-20 bg-neutral-800 text-neutral-200 '>
            <div className='w-1/3 flex flex-col justify-center px-20 py-32'>
                <p className='text-amber-400 text-xs font-medium pb-2'>Hi, My Name Is</p>
                <h1 className='font-extrabold text-3xl'>Muhamad Iqbal<br /> <span className='text-amber-400'> Fauzi.</span></h1>
                <div className='flex gap-5 mt-4'>
                    <img src={linkedin} alt="linkedin" width={20} className='text-neutral-200 hover:shadow-lg hover:shadow-amber-400'/>
                    <img src={github} alt="github" width={20} className='text-neutral-200 hover:shadow-lg hover:shadow-amber-400'/>
                    <img src={instagram} alt="instagram" width={20} className='text-neutral-200 hover:shadow-lg hover:shadow-amber-400'/>
                    <img src={tiktok} alt="tiktok" width={20} className='text-neutral-200 hover:shadow-lg hover:shadow-amber-400 '/>
                </div>
                <div className='mt-5'>
                    <button className='bg-amber-400 font-bold text-sm text-neutral-800 px-4 py-2 rounded-md hover:bg-white '>CONTACT ME</button>
                </div>
            </div>
            <div className='w-1/3 pt-60'>  
                <img src={rimuru} alt="Foto" className=''/>
            </div>
            <div className='w-1/3 px-20 py-32'>
                <p className='text-amber-400 text-xs font-medium'>I Am</p>
                <h1 className='font-bold text-2xl mb-2 mt-2'>Web Developer</h1>
                <p>I enjoy integrating elegant design with robust functionality. I believe that good software not only looks good but also operates seamlessly and effectively meets the needs of users.</p>
            </div>
        </header>
    </div>
  )
}

export default Header