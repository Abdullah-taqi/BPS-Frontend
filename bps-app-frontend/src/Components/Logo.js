import React from 'react'
import './Styles/Logo.css'
import logoimg from '../images/bps-logo.png'
import {Link as Lnk} from 'react-router-dom'

function Logo() {
  return (
    <div>
        <div className="main-logo">
              <div className='h-logo'>
                  <Lnk to='/' className="logo" >
                        <img src={logoimg} alt=''/>
                        
                  </Lnk>
                
              </div>
              
              <h5 className='smalltext'>By Focus Energy Limited</h5>
          </div>
    </div>
  )
}

export default Logo