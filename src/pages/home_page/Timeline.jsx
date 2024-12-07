import React from 'react'
import { timeline_data } from '../../utlis/dummy_data'
import { div } from 'framer-motion/client'


export default function Timeline() {
     return (
          <div className=' w-full relative flex-row z-20 flex justify-between items-center'>
               <div className=' absolute top-3 w-full z-10 h-[3px] bg-grayis'></div>
               {
                    timeline_data?.map((data, index) => (
                         <div className=' w-fit mx-4 flex-col flex justify-center items-center'>
                              <div className=' size-7 rounded-full bg-grayis'></div>
                              <div className=' font-Poppins text-[24px] font-normal text-grayis'>{data?.day}, {data?.month}</div>
                         </div>
                    ))
               }
          </div>
     )
}
