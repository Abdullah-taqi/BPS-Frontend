import React from 'react'
import './Styles/Research.css'
import ResearchList from './ResearchList'
import 'animate.css';
import Footer from './Footer'

function Research() {
  return (
    <div className="research">
         <h2 id='researchupdates' className='animate__animated animate__fadeInDown'>Research Updates!</h2>
         <ResearchList/>
         <Footer/>
    </div>
  )
}

export default Research