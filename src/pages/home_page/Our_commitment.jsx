import React from 'react'
import Title from '../../components/Title'
export default function Our_commitment() {
  return (
    <div className=' w-full   mt-2.5 bg-white pt-12  pb-28 space-y-20 flex flex-col justify-center items-center'>
      <Title
        data={"Our Commitments"}
        line_width='150px'
        pencil_width='28px'
        class_line={'absolute -right-6 -bottom-[20px]'}
        class_pencil={'absolute -bottom-2 -right-8'} />

      <p className=' w-[890px] text-center mx-auto text_type_HeaderPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, dolor sit amet,  <span className='text_type_HeaderSpan'>consectetur adipiscing elit.Lorem ipsum</span>   dolor sit amet, consectetur adipiscing elit.Lorem ipsum </p>
    </div>
  )
}
