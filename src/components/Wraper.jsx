import React from 'react'

export default function Wraper({ children }) {

     return (
          <div className='  bg-whiteis_bg  h-screen  w-full'>
               <div className=' w-full flex flex-col  justify-between  h-full mx-auto  max-w-screen-2xl '>
                    {children}
               </div>
          </div>
     )
}
