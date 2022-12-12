import React, {useState} from 'react'
import axios from 'axios'
import './Styles/News.css'

function MorningScan() {
  const [headings, setHeadings] = useState([])
  const [link, setLink] = useState(null)
  const [date, setDate] = useState(null)
  
    var getMorningScan = async () =>{
        const response = await axios.get('https://bps-app.herokuapp.com/morning-scan')
        setHeadings(response.data.morning[0].headings)
        setLink(response.data.morning[0].link)
        setDate(response.data.morning[0].date)
    } 
    getMorningScan()
 
   
  return (
    <div className='morning-scan'>
        <div id="news-headlines">
          <ul>
          {headings.map((item,i) =>(
              <li key={i}>{item}</li>
          ))}
          
          </ul>
        </div>
        <div className="read-source">
            <p>Source : Money Control</p>
            <p>Date : {date}</p>
            <a href={link} target="_blank" rel="noreferrer"><button >Read more</button></a>
        </div>
    </div>
  )
}

export default MorningScan