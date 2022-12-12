import React from 'react'
import './Styles/CareerCard.css'
import 'animate.css'

function CareerCard(props) {
  return (
        <div className="career-card animate__animated animate__zoomIn">        
            <div className="card-description">
                <div id="title-status"><h5 id='career-card-title'>{item.title}</h5><b><p className= {item.jobStatus==="OPEN" ? 'status activejob': 'status inactivejob'}>{item.jobStatus}</p></b></div>
                <p id="skills-required"><b>Skills required :</b>{item.skills}</p>
                <p className='description'><b>Description : </b>{item.desc}</p>
                <p className='description'><b>Eligiblity : </b>{item.eligiblity}</p>
                <hr id='hr'/>
            </div>
        </div>    
  )
}
export default CareerCard 