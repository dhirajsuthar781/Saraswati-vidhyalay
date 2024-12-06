import React from 'react'
import Title from '../../components/Title'

export default function Our_mission() {
  return (
    <div className=' relative w-full  mt-2.5 bg-white pt-12 pb-20  flex flex-col justify-center items-center'>

      {/* side girl */}
      <img src="/assets/sidegirl.png" alt="girls" className=' absolute w-[220px] h-[220px] left-0 bottom-0 ' />


      <Title
        data={"Our Mission"}
        line_width='150px'
        pencil_width='28px'
        class_line={'absolute -right-6 -bottom-[20px]'}
        class_pencil={'absolute -bottom-2 -right-8'} />

      <div className=' w-full pt-12 pr-20 pl-48 flex flex-row  justify-between items-center '>

        {/* left */}
        <div className=' w-[40%]  '>
          <p className='text_type_HeaderPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span className='text_type_HeaderSpan'>Lorem ipsum dolor sit amet, consectetur</span> adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, </p>
          <p className=' w-full text-end pt-10 font-Poppins text-[18px] font-semibold leading-[37px]'>- Board of Directors</p>
        </div>

        {/* right */}
        <div className=' w-[460px]  flex justify-center items-center h-[470px] relative  '>

          {/* center image */}

          <div className='shadow_6px size-[190px]  relative z-30   overflow-hidden '>
            <img
              src="/assets/person.png"
              alt="mission"
              className=' rounded-[10px] object-cover object-top' />
          </div>


          <div className='shadow_6px size-[210px] absolute top-0 left-0 overflow-hidden '>
            <img
              src="/assets/person.png"
              alt="mission"
              className=' rounded-[10px] object-cover object-top' />
          </div>

          <div className='shadow_6px absolute top-10 right-7 size-[182px] overflow-hidden '>
            <img
              src="/assets/person.png"
              alt="mission"
              className=' rounded-[10px] object-cover object-top' />
          </div>

          <div className='shadow_6px  absolute bottom-0 right-0 size-[210px] overflow-hidden '>
            <img
              src="/assets/person.png"
              alt="mission"
              className=' rounded-[10px] object-cover object-top' />
          </div>


          <div className='shadow_6px absolute bottom-10 left-7 size-[182px] overflow-hidden '>
            <img
              src="/assets/person.png"
              alt="mission"
              className=' rounded-[10px] object-cover object-top' />
          </div>

        </div>

      </div>


    </div>
  )
}
