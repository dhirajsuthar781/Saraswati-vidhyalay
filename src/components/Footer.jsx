import React from 'react'
import { LuCopyright } from "react-icons/lu";
import { MdLocationOn } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";

import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMail } from "react-icons/io5";

import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGoogle } from "react-icons/io";
import { NavLink } from 'react-router-dom';

import { navLinks } from '../utlis/navbar';


export default function Footer() {
     return (
          <>
               <div className=' w-full px-20 bg-white mt-2.5 mb-0.5 flex flex-row justify-between items-start pt-14 pb-10'>

                    {/* left */}
                    <div className=' flex flex-row w-1/2 gap-40  justify-start items-start'>

                         {/* adress and contatct */}
                         <div className=' w-[50%] text-primary'>
                              <div className=''>

                                   <div className=' font-Montserrat flex justify-start items-center gap-4 font-bold text-[20px] leading-[25px]'><MdLocationOn className='text-[34px]' />Address</div>

                                   <p className='pl-12 pt-4 font-Nunito text-[16px] font-semibold leading-[25px] text-[#222222]'>1435, 51st Street, Building #5, Second Floor, North Bergen, NJ 07047</p>

                              </div>

                              <div className=' mt-12'>

                                   <div className='font-Montserrat flex justify-start items-center gap-4 font-bold text-[20px] leading-[25px]'><IoPersonSharp className='text-[30px]' />Contact Us</div>

                                   <p className=' pl-12 pt-4 pb-3 font-Montserrat text-[16px] font-semibold leading-[25px] text-[#222222] flex justify-start items-center gap-4'><BiSolidPhoneCall className=' text-primary text-[24px]' /> (+91) 730-789</p>

                                   <p className=' pl-12  font-Montserrat text-[16px] font-semibold leading-[25px] text-[#222222] flex justify-start items-center gap-4'><IoMail className=' text-primary text-[22px]' /> Conatct@ssppsx.com</p>

                              </div>
                         </div>

                         {/* links */}
                         <div className=' w-1/2 space-y-4'>
                              {
                                   navLinks?.map((link,index) => (
                                        <div key={index} className={`${link.title === 'Gallery' ? ' hidden' : ''}`}>
                                             <NavLink to={link.path} className='text_type_frameTitle font-medium  hover:font-bold hover:text-secondary transition-all duration-200 '>{link.title}</NavLink>
                                        </div>
                                   ))
                              }

                         </div>


                    </div>


                    {/* right */}
                    <div className=''>
                         <div className='shadow_10px rounded-[20px]'>
                              <img
                                   src="/assets/map.png"
                                   alt="map"
                                   className='w-[460px] rounded-[14px] h-[293px] object-cover' />
                         </div>
                    </div>


               </div>

               <div className=' w-full px-20  py-3 flex flex-row justify-between items-center  bg-white mb-12'>
                    <div>
                         <p className=' font-Poppins font-medium text-[16px] leading-[25px] tracking-[3%] flex flex-row justify-start items-center gap-1 text-[#00000059]'><LuCopyright /> 2024 ALL RIGHTS RESERVED BY SHREE SARASWATI PRE-PRIMARY SCHOOL</p>
                         <p className=' font-Nunito font-semibold text-[16px] leading-[25px] tracking-[3%]'>Design and Develop by PRUTHATEK</p>
                    </div>
                    <div className=' flex flex-row justify-end items-center gap-4'>
                         <NavLink to={'/'} className=' hover:bg-primary transition-all duration-300 hover:-rotate-180 size-[50px] bg-secondary rounded-full flex justify-center items-center'>
                              <FiInstagram className=' text-white text-[23px] ' />
                         </NavLink >
                         <NavLink to={'/'} className=' hover:bg-primary transition-all duration-300 hover:-rotate-180 size-[50px] bg-secondary rounded-full flex justify-center items-center'>
                              <FaFacebookF className=' text-white text-[23px] ' />
                         </NavLink >
                         <NavLink to={'/'} className=' hover:bg-primary transition-all duration-300 hover:-rotate-180 size-[50px] bg-secondary rounded-full flex justify-center items-center'>
                              <IoLogoGoogle className=' text-white text-[23px] ' />
                         </NavLink >
                         <NavLink to={'/'} className=' hover:bg-primary transition-all duration-300 hover:-rotate-180 size-[50px] bg-secondary rounded-full flex justify-center items-center'>
                              <FaXTwitter className=' text-white text-[23px] ' />
                         </NavLink >
                    </div>
               </div>
          </>
     )
}
