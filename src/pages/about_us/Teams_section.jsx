import React from 'react'
import Title from '../../components/Title'
import Card_team from './Card_team'
import { team_data } from '../../utlis/dummy_data'

export default function Teams_section() {
  return (
    <div className=' w-full bg-white mt-2.5  space-y-24 pt-12 pb-20'>

    <div className=' w-full flex flex-col items-center '>
      <Title
        data={"Our Team"}
        line_width='150px'
        pencil_width='30px'
        class_line={'absolute -right-8 -bottom-[22px]'}
        class_pencil={'absolute -bottom-2 -right-10'} />
    </div>

    <div className=' grid grid-cols-6 grid-rows-2 gap-y-10 px-16 w-full'>
      {
        team_data?.map((data, index) => {
          return (
            <Card_team key={index} data={data} />
          )
        })
      }

    </div>

  </div>
  )
}
