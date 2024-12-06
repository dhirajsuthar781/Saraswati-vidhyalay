import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiArrowRight } from "react-icons/fi";

export default function Card_Board({ data }) {
     return (
          <div className='  bg-whiteis_bg w-[320px] h-[360px] flex flex-col justify-between items-center rounded-[10px] p-5'>

               <div>
                    <p className=' mt-3 text_type_frameTitle w-full text-center font-bold'>{data.title}</p>
                    <p className=' mt-6 text_type_one text-[14px] text-[#222222]'>{data.disc}</p>
               </div>

               <NavLink
                    to={data?.link}
                    className=" flex gap-1 flex-row justify-center  items-center  self-end font-Inter text-[16px] leading-[20px] text-secondary font-[600]">
                    Know more <FiArrowRight className=' font-semibold' />
               </NavLink>
          </div>
     )
}
