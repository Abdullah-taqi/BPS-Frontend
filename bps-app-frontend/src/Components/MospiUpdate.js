import React, {useState, useEffect} from 'react'
import axios from 'axios'
import MospiItem from './MospiItem'
import './Styles/News.css'

function MospiUpdate() {
  const [mospi, setMospi] = useState([])
  const current = new Date();
  const options = { month: 'long'};
  const month = new Intl.DateTimeFormat('en-US', options).format(current.getMonth());  
  const date = `${month} ${current.getDate()} ,  ${current.getFullYear()}`;

      useEffect(()=>{
        const getMospi = async () =>{
            const response = await axios.get('https://bps-app.herokuapp.com/mospi-updates')
            setMospi(response.data.mospi[0].results)
            
        } 
        getMospi()
      })
 
   
  return (
    <div className='mospi-update'>
        <div id="mospi-header">Economic Announcements</div>
        <div id="announcements">
      {mospi.map((item,i) => {
        return(
         <MospiItem
             key = {i}
             heading = {item.heading}
             url = {item.link === "" ? 'https://www.mospi.gov.in/' : item.link}
             date = {item.date === "" ? date : item.date}
         />
         )
      })}
        </div>
        <div className="read-source">
            <p>Source : Ministry of Statistics and Programme Implementation</p>
            <a href="https://www.mospi.gov.in/" target="_blank" rel="noreferrer"><button target="_blank">View All</button></a>
        </div>
    </div>
  )
}

export default MospiUpdate