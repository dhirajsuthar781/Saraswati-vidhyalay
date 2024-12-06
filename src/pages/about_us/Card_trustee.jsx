import React from 'react'


export default function Card_trustee({ data }) {
     return (
          <div className='shadow_frame group relative'>

               {/* hover element */}
               <div className=' opacity-0 transition-all duration-[450ms] group-hover:opacity-100 absolute top-0 left-0 w-full h-[300px] bg-white p-2 px-3 font-Poppins text-[16px] text-[#555555] leading-[30px] font-[400]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span className=' font-semibold text-bavista_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, elit.
               </div>


               {/* image */}
               <div>
                    <img
                         src={data?.image}
                         alt={data?.tilte}
                         className='w-[300px] h-[300px] rounded-[6px] object-cover object-top'
                    />
               </div>

               {/* text and names */}
               <div className=' w-full pt-3  flex flex-col justify-center  items-center  '>

                    <p className='text_type_frameTitle w-fit transition-all text-center duration-[450ms]    translate-x-0 group-hover:translate-x-[43%] group-hover:text-[18px] group-hover:leading-[27px] '>{data?.title}</p>

                    <p className='text_type_frameState w-fit   translate-x-0 group-hover:translate-x-[70%] text-center  transition-all duration-[450ms] '>{data?.disc} <span className=' font-semibold'>{data?.highlight_disc}</span></p>

               </div>
          </div>
     )
}
