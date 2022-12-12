import {React, useState} from 'react'
import './Styles/Contact.css'
import LoadingOverlay from 'react-loading-overlay';

function Maps() {

  const [isActive, setIsActive] = useState(true)
  setTimeout(() =>{
    setIsActive(false)
  },1000)
  return (
    <LoadingOverlay
    active={isActive}
    spinner
    text = "Loading">
    <div>
        <div className='maps'>
        <iframe title='Locate us' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7016.460677924835!2d77.04013987468328!3d28.44247207356098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sfocus%20energy!5e0!3m2!1sen!2sin!4v1659352172794!5m2!1sen!2sin" width="320" height="400"
        style={{border:0, allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
        </div>
    </div>
    </LoadingOverlay>
  )
}

export default Maps

