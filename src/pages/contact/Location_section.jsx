import React from 'react'
import Title from '../../components/Title'

export default function Location_section() {
  return (
    <div className=' w-full px-24  mt-2.5 bg-white pt-12 pb-16  flex flex-col justify-center items-center'>
      <Title
        data={"Location"}
        line_width='140px'
        pencil_width='28px'
        class_line={'absolute -right-7 -bottom-[20px]'}
        class_pencil={'absolute -bottom-2 -right-9'} />

      <div className=' w-full shadow_10px mt-12'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error culpa ducimus quasi, magni nemo corrupti adipisci excepturi mollitia molestias dicta?
      </div>

      <div className=' mt-12'>
        <p className=' font-Poppins font-bold text-[34px] leading-[52px] text-primary'>Shree Saraswati Pre-Primary School</p>
        <p className=' font-Poppins font-[400] text-[24px] leading-[36px] text-[#555555]'>Dholka, Kharakoova, Ahmedabad, Gujarat 382225</p>
      </div>

    </div>
  )
}
