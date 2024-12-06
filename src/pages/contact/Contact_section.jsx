import React from 'react'
import Title from '../../components/Title'
export default function Contact_section() {
     return (
          <div className=' w-full mb-36  mt-2.5 bg-white pt-12 pb-28 space-y-20 flex flex-col justify-center items-center'>
               <Title
                    data={"Contacts"}
                    line_width='140px'
                    pencil_width='28px'
                    class_line={'absolute -right-7 -bottom-[20px]'}
                    class_pencil={'absolute -bottom-2 -right-9'} />

               <p className=' w-[890px] mx-auto text_type_HeaderPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, <span className='text_type_HeaderSpan'>consectetur adipiscing elit.Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,</p>
          </div>
     )
}
