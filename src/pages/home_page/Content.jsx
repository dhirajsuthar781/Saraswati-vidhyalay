import React from 'react'

export default function Content() {
     return (
          <div className=' pl-24 pr-36 pt-10 flex flex-row w-full justify-between items-start'>
               <div className='   w-[453px]'>
                    <p className=' font-Poppins font-semibold text-[28px] text-bavista_text mb-5'>Anual Function</p>
                    <p className='text_type_HeaderPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, <span className='text_type_HeaderSpan'>consectetur adipiscing elit.Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, </p>
               </div>
               <div className='  '>
                    <p className=' mb-4 text-center font-Poppins font-semibold text-[28px] text-secondary'>Gallery</p>

                    <div className=' w-[553px] h-[327px] shadow_6px'>
                         <img src="/assets/vision.png" alt="annual" className=' object-cover object-top w-full h-full' />
                    </div>

               </div>
          </div>
     )
}
