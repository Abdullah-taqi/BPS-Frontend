import React from 'react'
import {useState} from "react";
import Axios from 'axios'
import './Styles/morning-component.css'

function SpComponent() {


    const [sp, setSp] = useState([])
    const [date, setDate] = useState(null)
    
    
    Axios.get("https://bps-app.herokuapp.com/sp-gainers")
    .then(response =>{
    setSp(response.data.sp[0].results)
    setDate(response.data.sp[0].date)
    })

  return (
    <div className='sub-gainers-table'>
                <div id="last-updated"><span id='last-updated-span'>Last updated on : {date} IST</span></div> 
                <div id="gainers-column">
                    <div className='col grey-op'>
                        <h6>SYMBOL</h6><hr id='hr-dark'/>
                        {sp.map((item, i) => (
                        <div key={i}>
                            <p className='symbol-name'>{item.symbol}</p>
                        </div>
                        
                    ))}
                    </div>
                    <div className='col green-op'>
                    <h6>CLOSE</h6><hr/>
                        {sp.map((item, i) => (
                        <div key={i}>
                            <p className='blue'>{item.close}</p>
                        </div>
                        
                    ))}
                    </div>
                    <div className='col grey-op'>
                    <h6>LTP</h6><hr id='hr-dark'/>
                        {sp.map((item, i) => (
                        <div key={i}>
                            <p className='blue'>{item.ltp}</p>
                        </div>
                        
                    ))}
                    </div>
                    <div className='col green-op'>
                    <h6>GAIN</h6><hr />
                        {sp.map((item, i) => (
                        <div key={i}>
                            <p className='blue gain'>{item.gain} %</p>
                        </div>
                    ))}
                    </div>
                </div>
    </div>
    
  )
}

export default SpComponent