import React from 'react'
import Title from '../../components/Title'
import { trustees_data } from '../../utlis/dummy_data'
import Card_trustee from './Card_trustee'



export default function Trustees_section() {
  return (
    <div className=' w-full bg-white mt-2.5  space-y-24 pt-12 pb-36'>

      <div className=' w-full flex flex-col items-center '>
        <Title
          data={"Trustees"}
          line_width='150px'
          pencil_width='30px'
          class_line={'absolute -right-6 -bottom-[18px]'}
          class_pencil={'absolute -bottom-2 -right-9'} />
      </div>

      <div className=' flex flex-row justify-center items-center gap-6'>

        {
          trustees_data?.map((data, index) => {
            return (
              <Card_trustee key={index} data={data} />
            )
          })
        }

      </div>

    </div>
  )
}
