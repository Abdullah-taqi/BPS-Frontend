import {React, useState} from 'react'
import './Styles/Careers.css'
import './Styles/CareerCard.css'
import './Styles/Contact.css'
import 'animate.css';
import Axios from "axios"
import Footer from './Footer'
import LoadingOverlay from 'react-loading-overlay';


function Careers() {
  const [jobClose, setJobClose] = useState(1);
  const [jobsList, setJobsList] = useState([])
  const [isActive, setIsActive] = useState(true)
  const [toggleState, setToggleState] = useState("Development");
  const toggleTab = (index) => {
        setToggleState(index);
        setIsActive(false)
    }
  Axios.get("https://bps-admin.herokuapp.com/admin/job-list")
    .then(response => {
        setJobsList(response.data.jobs)
        setIsActive(false)
    })

  return (
    
    <div>
        <div className='career-container'>
                <h2 id='jointheteam' className='animate__animated animate__fadeInDown'>Join the team!</h2>
                <LoadingOverlay
                active={isActive}
                spinner
                text = "Loading">
                <div className='career-cards-container'>
                
                    <div className="job-header">
                        <button className={toggleState === "Development" ? "tabs active-tabs" : "tabs"} onClick={()=>toggleTab("Development")}>Development</button>
                        <button className={toggleState === "Analyst" ? "tabs active-tabs" : "tabs"} onClick={()=>toggleTab("Analyst")}>Analyst</button>
                        <button className={toggleState === "Others" ? "tabs active-tabs" : "tabs"} onClick={()=>toggleTab("Others")}>Others</button>
                    </div>
                    <div className="filter-btn-div">
                        <div id="job-filter">
                            <div> <p>Filter by : &nbsp;&nbsp;</p></div>
                            <div>
                                <select onChange={() =>{
                                    if(jobClose===1){
                                        setJobClose(0)
                                    }else{
                                        setJobClose(1)
                                    }
                                }}>
                                <option>All jobs</option>
                                <option>Openings</option>
                                </select>
                            </div>
                            
                        </div>
                        <div id="job-btn">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf6HbeckPxA28Oo8AYzwZ-DNjglpJF8E8r4-6-sP2cnYnQdxw/viewform" rel="noreferrer" target='_blank'><button>Submit Application</button></a>
                        </div>
                        </div>
                    <div className="job-profiles">
                        {jobsList.map((item, i) => (  
                            <div className={toggleState === item.category ? "jobs-category" : "hide-job"}>
                                <div key={i}>
                                <div className="career-card animate__animated animate__zoomIn">        
                                <div className="card-description">
                                    <div id="title-status"><h5 id='career-card-title'>{item.title}</h5><b><p className= {item.jobStatus==="OPEN" ? 'status activejob': 'status inactivejob'}>{item.jobStatus}</p></b></div>
                                    <p id="skills-required"><b>Skills required :</b>{item.skills}</p>
                                    <p className='description'><b>Description : </b>{item.desc}</p>
                                    <p className='description'><b>Eligiblity : </b>{item.eligibility}</p>
                                    <hr id='hr-career'/>
                                </div>
                            </div>  
                    </div>
            </div>  
         
      ))}
                    </div>
                
                </div>
                </LoadingOverlay>
        </div>
            <Footer/>
        
        
    </div>
    
    )
}

export default Careers