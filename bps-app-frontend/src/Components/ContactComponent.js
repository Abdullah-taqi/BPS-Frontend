import React from 'react'
import './Styles/ContactComponent.css'
import emailjs from '@emailjs/browser'
import {useRef, useState} from "react";

function ContactComponent() {
  const form = useRef();
  const [done, setDone] = useState()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ha9w75m', 'template_z22yvdo', form.current, 'UG95p4nlXoJX276H_')
      .then((result) => {
          // console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div>
        <form ref={form} onSubmit={sendEmail}>
                                <div className="form-fields">
                                    <div className="field">
                                    <select className='form-input' name="regarding">
                                      <option value="recruitment">Regarding recruitment</option>
                                      <option value="policy">Regarding policy</option>
                                      <option value="business">Regarding business</option>
                                      <option value="something">Others</option>
                                    </select>
                                    </div>
                                    <div className="field">
                                    <input className='form-input' type="text" name = "user_name" placeholder='Name' required/>
                                    <br/>
                                    </div>
                                    
                                    <div className="field">
                                    <input className='form-input' type="number" name = "user_phone" placeholder='Phone no' required/>
                                    <br/>
                                    </div>
                                    
                                    <div className="field">
                                    <input className='form-input' type="email" name = "user_email"  placeholder='Email ID' required/>
                                    </div>      

                                    <div className="field">
                                    <textarea className='form-input' rows="3" type="text" name = "message" placeholder='Enter your message' required/>
                                    </div>    

                                    <button className='form-button' type='submit'>Send</button>                               
                                    <span id="successmsg">{done && "Message send successfully!"}</span>
                                </div>
                            </form>
    </div>
  )
}

export default ContactComponent