import React from 'react'
import './Styles/Footer.css'
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import {Link as Lnk} from 'react-router-dom'
import 'animate.css';

function Footer() {
  return (
    <div className='animate__animated animate__slideInUp footer'>
        <div className='footer-div'>
            <div className='container'>
                <div id='left'>
                  <div id='logo'>
                  <Logo/>
                  </div> 
                    <div className='social-icons'>
                      <FontAwesomeIcon id='twitter' className='icons' icon={faTwitter} size="2x" />
                      <FontAwesomeIcon id='facebook' className='icons' icon={faFacebookF} size="2x"/>
                      <FontAwesomeIcon id='linkedin' className='icons' icon={faLinkedin} size="2x"/>
                      <FontAwesomeIcon id='instagram' className='icons' icon={faInstagram} size="2x"/>
                    </div>
                  <div className='copyright-text'>
                  <p>© 2022 | BPS - By Focus Energy</p>
                  <p>All rights reserved</p>
                  </div>
                </div>
                <div id='mid'>
                  <ul className='footer-ul'>
                    <h5>QUICK LINKS</h5>
                    <div className='quicklinks'>
                    <div className='left-links'>
                        <li className='footer-li'><Lnk to="/">HOME</Lnk></li>
                        <li className='footer-li'><Lnk to="/about">ABOUT</Lnk></li>
                        <li className='footer-li'><Lnk to="/careers">CAREERS</Lnk></li>
                    </div>
                    <div className='right-links'>
                        <li className='footer-li'><Lnk to="/">NEWS</Lnk></li>
                        <li className='footer-li'><Lnk to="/research">RESEARCH</Lnk></li>
                        <li className='footer-li'><Lnk to="/contact">CONTACT</Lnk></li>
                    </div>
                    </div>
                  </ul>
                </div>
                <div id='right'>
                  <div className='company-details '>
                    <h5>CONTACT US</h5>
                    <div className='address'>
                      <a href="https://www.google.com/maps/search/focus+energy/@28.442472,77.04014,15z?hl=en" target={"_blank"} rel="noreferrer">
                      <p>BPS TECH SERVICES PRIVATE LIMITED</p>
                      <p>Plot No. 6, Sector-32, Gurgaon,</p>
                      <p>Haryana 122001 - India</p>
                      </a>
                    </div>
                    <div className='contact-no'>
                      <p><a href='tel:0124-4241234'>Call : 0124-4241234</a></p>
                    </div>
                    <div className='mail-ids'>
                      <p><a href='mailto:info@bpstech.in'>info@bpstech.in</a></p>
                    </div>
                    
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer