import React from 'react'
import Logo_main from './Logo_main'
import { navLinks } from '../utlis/navbar'
import { NavLink } from 'react-router'

export default function Navbar() {
     return (
          <div className=' z-50 sticky top-0   bg-white shadow-[0px_5px_9px_0px_#50505040] w-full '>
               <div className='mx-auto  max-w-screen-2xl  flex flex-row justify-between items-center px-12 py-1'>

                    <Logo_main />
                    <div className=' flex flex-row justify-end items-center gap-[20px]'>
                         {navLinks?.map((link) => (
                              <NavLink key={link.title} to={link.path} className='text_type_one  text-blackis'>{link.title}</NavLink>
                         ))}
                    </div>
               </div>

          </div>
     )
}
