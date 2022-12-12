import React from 'react'
import './Styles/About.css'
import Footer from './Footer';
import 'animate.css';
import AboutComponent from './AboutComponent';


function About() {
  return (
    <div>
                    <div className='right-card right-about'>
                        <div className='about-content'>
                        <h2 id='moreaboutus' className='animate__animated animate__fadeInDown'>More about us!</h2>
                        <AboutComponent/>
                        </div>
                    </div>
       
        <Footer/>
    </div>
  )
}

export default About