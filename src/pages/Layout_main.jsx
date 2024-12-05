import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function Layout_main() {
     return (
          <div className='  bg-whiteis_bg  h-screen flex flex-col justify-between items-start  w-full'>
               <Navbar />

               <div className=' overflow-auto  w-full      h-full'>
                    <div className='mx-auto w-full max-w-screen-2xl '>
                     
                         <Outlet />
                         <Footer />
                    </div>
               </div>
          </div >

     )
}



export default Layout_main