import React from 'react'

const Main = () => {
  return (
    <div>
        <main>
            <div className='bg-black bg-opacity-80 flex flex-col items-center justify-center pb-7 pt-20'>
              <div className=''>
              <h1 className='font-bold text-amber-400 self'>Services</h1>
                <h1 className='text-2xl text-neutral-200 font-bold mb-4'>Tech Stack</h1>
              </div>

                <div className='flex justify-center gap-20'>
                    <div className='flex flex-col'>
                      <p className='text-lg font-medium text-amber-400 italic'>2021 - Now</p>
                      <p className='text-white font-medium'>Pursuing Bachelor's Degree in <span className='text-amber-400'>Informatics Engineering</span></p>
                      <p className='text-neutral-200'>UIN Sunan Gunung Djati Bandung</p>
                      <p className='text-white font-medium'>Expected Graduation: <span className='text-amber-400'>2025</span></p>
                    </div>

                    <div className='flex flex-col'>
                      <p className='text-lg font-medium text-amber-400 italic'>2017 - 2020</p>
                      <p className='text-white font-medium'>Graduated from <span className='text-amber-400'>MA Cikande</span></p>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Main