import React from 'react'
import Main from '../components/Main'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Pro from '../components/Project'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Main/>
        <Pro/>
        <aside>

        </aside>
    </div>
  )
}

export default Home