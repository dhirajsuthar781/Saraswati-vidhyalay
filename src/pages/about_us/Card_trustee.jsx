import React from 'react'

export default function Card_trustee({ data }) {
     return (
          <div className='shadow_frame'>
               <div>
                    <img
                         src={data?.image}
                         alt={data?.tilte}
                         className='w-[300px] h-[300px] rounded-[6px] object-cover object-top'
                    />
               </div>
               <div className=' w-full flex flex-col justify-center items-center'>
                    <p className='text_type_frameTitle'>{data?.tilte}</p>
                    <p className='text_type_frameState'>{data?.disc} <span className=' font-semibold'>{data?.highlight_disc}</span></p>
               </div>
          </div>
     )
}
