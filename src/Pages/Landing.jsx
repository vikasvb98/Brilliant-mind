import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Rightsidebar from '../components/Rightsidebar'

const Landing = () => {
  return (
    <div className='h-screen antialiased overflow-hidden'>
    <Navbar />
    <Main />
    <Rightsidebar/>
    </div>
  )
}

export default Landing