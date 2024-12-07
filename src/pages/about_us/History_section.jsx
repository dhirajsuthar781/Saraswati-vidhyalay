import React from 'react'
import Title from '../../components/Title'
import Svg from './Svg'




export default function History_section() {
  return (
    <div className=' w-full bg-white mt-2.5  pt-12  pb-14 relative  '>

      <img src="/assets/sidegirl.png" alt="girls" className=' absolute w-[220px] h-[220px] left-0 bottom-0 ' />

      <div className=' w-full flex flex-col items-center '>
        <Title
          data={"History"}
          line_width='150px'
          pencil_width='30px'
          class_line={'absolute -right-6 -bottom-[18px]'}
          class_pencil={'absolute -bottom-2 -right-9'} />
      </div>

      <div className=' mt-5 flex flex-row justify-between items-center gap-4  pl-48 pr-20'>

        <div className=' w-[560px] flex flex-col justify-start gap-6 items-start'>
          <p className='text_type_HeaderPara text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span className='text_type_HeaderSpan'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span> .Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, </p>

          <p className='text_type_HeaderPara text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span className='text_type_HeaderSpan'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span> .Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, </p>
        </div>

        <div className='pt-2 w-1/2 flex flex-col justify-center items-end'>
          <Svg width="474" height="500" viewBox="0 0 474 500"/>
        </div>

      </div>

    </div>
  )
}
