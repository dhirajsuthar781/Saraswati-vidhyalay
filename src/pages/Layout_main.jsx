import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Wraper from '../components/Wraper'

function Layout_main() {
     return (
          <Wraper>
               <Navbar />
               <div className=' overflow-auto  w-full   max-w-screen-2xl   h-full'>
                    <Outlet />
                    <Footer />
               </div>
          </Wraper>
     )
}



export default Layout_main