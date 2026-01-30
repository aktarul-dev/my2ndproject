import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'




function App() {


  return (
    <>
      <Navbar />
      <main className='min-h-screen'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App

