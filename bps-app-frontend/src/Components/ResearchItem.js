import React from 'react'
import './Styles/News.css'
import 'animate.css'

function ResearchItem({link,date,title}) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
    <div className='research-item animate__animated animate__zoomIn'>
          <iframe title="iframe1" id="iframe-pdf" src={link} width="280" height="350" allow="autoplay" ></iframe>
          <p id='research-title'>{title}</p>
          <p id='research-date'>{date || 2022}</p>
    </div>
    </a>
  )
}

export default ResearchItem