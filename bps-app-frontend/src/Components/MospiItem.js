import React from 'react'
import './Styles/News.css'

const MospiItem = ({heading, date, url}) => {
  return (
        <div className="mospi-item">
            <a id='mospi-link' href={url}>{heading}</a>
            <p id='mospi-date'>{date}</p>
        </div>
      
  )
}

export default MospiItem