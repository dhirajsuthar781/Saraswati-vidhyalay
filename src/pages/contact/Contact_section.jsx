import React from 'react'
import Title from '../../components/Title'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { IoMail } from 'react-icons/io5'
import { Button } from "@nextui-org/button";

export default function Contact_section() {
     return (
          <div className=' w-full mb-36  mt-2.5 bg-white  pb-10 space-y-20 flex relative flex-col justify-center items-center'>

               <img src="/assets/sidegirl.png" alt="girls" className=' absolute w-[220px] h-[220px] left-0 bottom-0 ' />
               {/* side girl */}
               <img src="/assets/sidegirl2.png" alt="girls" className=' absolute w-[217px] h-[194px]  right-0 bottom-20 ' />



               <Title
                    data={"Contacts"}
                    line_width='140px'
                    pencil_width='28px'
                    class_line={'absolute -right-7 -bottom-[20px]'}
                    class_pencil={'absolute -bottom-2 -right-9'} />


               <div className=' flex flex-col justify-start items-center'>

                    <div className=' flex flex-row gap-20 justify-center items-start'>

                         <div className='text_type_HeaderSpan space-y-3 pl-5 font-semibold'>
                              <p>For Admission Inquiry</p>
                              <p>For Admin Office</p>
                              <p>Email Id</p>
                         </div>

                         <div className='space-y-3'>
                              <p className='  leading-[37px]  font-Montserrat text-[16px] font-semibold  text-[#222222] flex justify-start items-center gap-4'><BiSolidPhoneCall className=' text-secondary text-[24px]' /> (+91) 730-789</p>

                              <p className='  leading-[37px]  font-Montserrat text-[16px] font-semibold  text-[#222222] flex justify-start items-center gap-4'><BiSolidPhoneCall className=' text-secondary text-[24px]' /> (+91) 730-789</p>
                              <p className='   leading-[37px]  font-Montserrat text-[16px] font-semibold  text-[#222222] flex justify-start items-center gap-4'><IoMail className=' text-secondary text-[22px]' /> Conatct@ssppsx.com</p>
                         </div>
                    </div>

                    <div className=' mt-10  flex flex-col gap-5 justify-center items-center'>
                         <p className='text_type_HeaderSpan font-semibold'>Fill Admission Form online</p>
                         <Button className=' rounded-[10px] w-[185px] h-[50px] bg-secondary font-Poppins text-[16px] font-semibold text-white hover:bg-primary '>Admission form</Button>
                    </div>

               </div>

          </div>
     )
}
