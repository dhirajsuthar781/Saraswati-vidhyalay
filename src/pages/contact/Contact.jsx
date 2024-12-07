import React, { useEffect } from 'react'
import Contact_section from './Contact_section'
import Location_section from './Location_section'

export default function Contact() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  })
  return (
    <div>
      <Location_section />
      <Contact_section />
    </div>
  )
}
