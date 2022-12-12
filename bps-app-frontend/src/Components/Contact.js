import React from 'react'
import './Styles/Contact.css'
import call from '../images/call.png';
import mail from '../images/email.png';
import place from '../images/place.png';
import Maps from '../Components/Maps';
import Footer from './Footer';
import ContactComponent from './ContactComponent' 
import 'animate.css';

function Contact() {
  return (
        <div>
            <h2 id='getintouch' className='animate__animated animate__fadeInDown'>Get in touch!</h2>
          <div className="contact-div">
                <div className="form-map-details">
                    <div className="map"><Maps/>
                    </div>
                    <div className="map">
                        <div id="blur-blue" className='animate__animated animate__zoomIn'></div>
                        <div className="form-content contact">
                            <a className="contact-card animate__animated animate__zoomIn" href='mailto:info@bpstech.in'> 
                                <div className="contact-icon icon"><img src={mail} alt="call"/></div>
                                <p className="card-details">Email us at info@bpstech.in</p>
                            </a>
                            <a className="contact-card animate__animated animate__zoomIn" href='tel:0124-4241234'> 
                                <div className="contact-icon icon"><img src={call} alt="call"/></div>
                                <p className="card-details">Feel free to call us at 0124-4241234</p>
                            </a>
                            <a className="contact-card animate__animated animate__zoomIn" target={"_blank"} rel="noreferrer" href='https://www.google.com/maps/search/focus+energy/@28.442472,77.04014,15z?hl=en'> 
                                <div className="contact-icon icon"><img src={place} alt="call"/></div>
                                <p className="card-details">Locate our family office in sector 32, Gurugram</p>
                            </a>
                    
                            
                        </div>
                    </div>
                    <div className="map">
                        <div className="form-content">
                            <p id='enquiry'>SEND ENQUIRY !</p>
                            <hr id='contact-hr'/>
                            <ContactComponent/>
                        </div>
                    </div>
                </div>
          </div>
          <Footer/>
        </div>
  )
}

export default Contact