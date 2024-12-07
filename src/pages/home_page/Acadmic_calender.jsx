import React from 'react'
import Title from '../../components/Title'
import Content from './Content'
import { Button } from '@nextui-org/button'
import { IoIosArrowDown } from "react-icons/io";
import Timeline from './Timeline';



export default function Acadmic_calender() {
  return (
    <div className=' w-full   mt-2.5 bg-white pt-12  pb-16   flex flex-col justify-center items-center'>
      <Title
        data={"Academic Calender"}
        line_width='150px'
        pencil_width='28px'
        class_line={'absolute -right-8 -bottom-[20px]'}
        class_pencil={'absolute -bottom-2 -right-10'} />

      <div className=' px-24 w-full flex flex-row justify-between items-center'>
        <div className=' flex flex-row justify-center items-center gap-4'>
          <span className=' font-Poppins text-[26px] font-semibold'>January</span>
          <Button className=' border-[1.5px] border-black rounded-xl'  variant="bordered" isIconOnly>
            <IoIosArrowDown className=' text-2xl'/>
          </Button>
        </div>
        <p className='font-Poppins text-[26px] font-semibold'> Year, 2025</p>
      </div>
      <div className=' w-full mt-10 mb-8'>
        <Timeline/>
      </div>

      <Content />
    </div>
  )
}
