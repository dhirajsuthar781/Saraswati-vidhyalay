import React from 'react'
import Title from '../../components/Title'
import Card_trustee from './Card_trustee'
import { trustees_data } from '../../utlis/dummy_data'

export default function Ourpillars_section() {
  return (
    <div className=' w-full bg-white mt-2.5  space-y-24 pt-12 pb-36'>

      <div className=' w-full flex flex-col items-center '>
        <Title
          data={"Our Pillar"}
          line_width='150px'
          pencil_width='30px'
          class_line={'absolute -right-10 -bottom-[22px]'}
          class_pencil={'absolute -bottom-2 -right-12'} />
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
