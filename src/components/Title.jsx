import React from 'react'

export default function Title({ data, line_width, pencil_width, class_line, class_pencil }) {
     return (
          <div className='w-fit h-fit relative'>

               {/* 176 80 */}
               <p className='text_type_Bavista'>{data}</p>
               <img
                    className={class_line}
                    src="./src/assets/lines.png"
                    loading='lazy'
                    alt='line'
                    width={line_width}
               />
               <img
                    className={class_pencil}
                    src="./src/assets/pencil.png"
                    loading='lazy'
                    alt='pencil'
                    width={pencil_width}
               />
          </div>
     )
}
