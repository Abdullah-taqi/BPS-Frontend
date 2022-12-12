import React from 'react'
import {useState, useEffect} from "react";
import Axios from 'axios'
import './Styles/morning-component.css'

function NiftyComponent() {


    const [nifty, setNifty] = useState([])
    const [date, setDate] = useState(null)
    
    
    useEffect(() => {
        Axios.get("https://bps-app.herokuapp.com/nifty-gainers")
        // Axios.get("http://localhost:3001/nifty-gainers")
        .then(response =>{
        setNifty(response.data.nifty[0].results)
        setDate(response.data.nifty[0].date)
        })
    },[])

  return (
    <div className='sub-gainers-table'>
                <div id="last-updated"><span id='last-updated-span'>Last updated on : {date} IST</span></div> 
                <div id="gainers-column">
                    <div className="col-margin">
                    <div className='col grey-op'>
                        <h6>SYMBOL</h6><hr id='hr-dark'/>
                        {nifty.map((item, i) => (
                        <div key={i}>
                            <p className='symbol-name'>{item.symbol}</p>
                        </div>
                        
                    ))}
                    </div>
                    <div className='col green-op'>
                    <h6>CLOSE</h6><hr/>
                        {nifty.map((item, i) => (
                        <div key={i}>
                            <p className='blue'>{item.close}</p>
                        </div>
                        ))}
                    </div>
                    <div className='col grey-op'>
                    <h6>LTP</h6><hr id='hr-dark'/>
                        {nifty.map((item, i) => (
                        <div key={i}>
                            <p className='blue'>{item.ltp}</p>
                        </div>
                        
                    ))}
                    </div>
                    <div className='col green-op'>
                    <h6>GAIN</h6><hr />
                        {nifty.map((item, i) => (
                        <div key={i}>
                            <p className='blue gain'>{item.gain} %</p>
                        </div>
                    ))}
                    </div>
                    </div>
                </div>
    </div>
    
  )
}

export default NiftyComponent