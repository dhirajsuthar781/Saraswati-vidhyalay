import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodo } from '../../store/UserSlice'
import Hero_swiper from './Hero_swiper'
import Our_mission from './Our_mission'
import Vision from './Vision'
import Acadmic_calender from './Acadmic_calender'
import Our_commitment from './Our_commitment'

export default function Home_page() {

     const { todo } = useSelector((state) => state.UserStore)
     const dispatch = useDispatch()

     
     useEffect(() => {
          // dispatch(fetchTodo())
          window.scrollTo({
               top: 0,
               behavior: 'smooth',  
          });
     })
     return (
          <div>
               <Hero_swiper />
               <Our_mission />
               <Our_commitment />
               <Vision />
               <Acadmic_calender />

          </div>
     )
}

