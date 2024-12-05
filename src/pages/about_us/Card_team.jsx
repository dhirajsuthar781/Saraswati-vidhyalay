import React from 'react'

export default function Card_trustee({ data }) {
     return (
          <div className='  flex justify-center flex-col items-center'>
               <div className=' shadow_8px  w-fit h-fit hover:border-secondary transition-all  duration-500  hover:shadow-none'>
                    <img
                         src={data?.image}
                         alt={data?.tilte}
                         className='w-[190px] h-[190px] rounded-full object-cover object-top'
                    />
               </div>
               <div className=' w-full pt-5 flex flex-col justify-center items-center'>
                    <p className='text_type_frameTitle'>{data?.tilte}</p>
                    <p className='text_type_frameState'>{data?.disc} </p>
               </div>
          </div>
     )
}
