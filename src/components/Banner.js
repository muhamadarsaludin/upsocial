import React from 'react'
import './Banner.css'

export default function Banner(props) {
  return (
    <div>
      <img src={props.src} alt={props.alt} className={`img-full ${props.className}`} />
    </div>
  )
}
