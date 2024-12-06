import React from 'react'
import Title from '../../components/Title'

export default function Vision() {
  return (
    <div className=' relative w-full  mt-2.5 bg-white pt-12 pb-48  flex flex-col justify-center items-center'>

      {/* side girl */}
      <img src="/assets/sidegirl2.png" alt="girls" className=' absolute w-[217px] h-[194px] left-0 bottom-0 ' />


      <Title
        data={"Our Vision"}
        line_width='150px'
        pencil_width='28px'
        class_line={'absolute -right-6 -bottom-[20px]'}
        class_pencil={'absolute -bottom-2 -right-8'} />

      <div className=' w-full pt-36 pr-20 pl-48 flex flex-row  justify-between items-center '>

        {/* left */}
        <div className=' w-[40%] '>
          <p className='text_type_HeaderPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span className='text_type_HeaderSpan'>Lorem ipsum dolor sit amet, consectetur</span> adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, </p>
          <p className=' w-full text-end pt-10 font-Poppins text-[18px] font-semibold leading-[37px]'>- Board of Directors</p>
        </div>

        {/* right */}
        <div className=' w-fit flex justify-center items-center  relative  '>

          <div className=' relative w-[630px] h-[285px] z-10 '>

            <div className=' w-full h-full border-[2px] border-primary border-dashed  rounded-[16px]   absolute z-0  -right-4 -bottom-4'>

            </div>
            <img
              src="/assets/vision.png"
              alt="vision"
              className=' relative shadow_6px  z-20 w-full h-full rounded-[14px] object-cover object-top' />
          </div>


        </div>

      </div>


    </div>
  )
}
