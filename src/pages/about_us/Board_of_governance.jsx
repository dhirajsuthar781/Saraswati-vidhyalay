import React from 'react'
import Title from '../../components/Title'
import Card_Board from './Card_Board.jsx'
import { board_data } from '../../utlis/dummy_data'



export default function Board_of_governance() {
  return (
     <div className=' w-full bg-white mt-2.5  space-y-20 pt-12 pb-24'>

      <div className=' w-full flex flex-col items-center '>
        <Title
          data={"Board of Governance"}
          line_width='140px'
          pencil_width='27px'
          class_line={'absolute -right-8 -bottom-[22px]'}
          class_pencil={'absolute -bottom-2 -right-10'} />
      </div>

      <div className=' flex flex-row justify-center items-center gap-4'>

        {
          board_data?.map((data, index) => {
            return (
              <Card_Board key={index} data={data} />
            )
          })
        }

      </div>

    </div>
  )
}
