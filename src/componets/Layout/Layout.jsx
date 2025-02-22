import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
Outlet

export default function Layout() {
  return (
    <div>
      <div className='container w-[90%] mx-auto my-[100px] lg:py-12'>
      <Navbar/>
      <Outlet />

      


      <Footer />
      </div>
          </div>
  )
}
