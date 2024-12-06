import React from 'react'

import History_section from './History_section'
import Trustees_section from './Trustees_section'
import Ourpillars_section from './Ourpillars_section'
import Teams_section from './Teams_section'
import Board_of_governance from './Board_of_governance'

export default function About_us() {
     return (
          <div>
               <History_section />
               <Trustees_section />
               <Ourpillars_section />
               <Teams_section />
               <Board_of_governance/>

          </div>
     )
}
