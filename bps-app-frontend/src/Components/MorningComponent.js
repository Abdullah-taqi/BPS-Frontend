import React from 'react'
import {useState, useEffect} from "react";
import Axios from 'axios'
import './Styles/morning-component.css'
import 'animate.css'
import Gainers from './Gainers';
import LoadingOverlay from 'react-loading-overlay';


function MorningComponent() {
  const [oldData, setOldData] = useState({})
  const [newData, setNewData] = useState({})
  const [isActive, setIsActive] = useState(true)

  useEffect( () =>{

    Axios.get('https://bps-app.herokuapp.com/data')
    .then(response => {
      let length = response.data.updates.length-1
      setOldData(response.data.updates[length-1])
      setNewData(response.data.updates[length])
      setIsActive(false)
    })
    
  },[])

  return (
    <LoadingOverlay
    active={isActive}
    spinner
    text = "Loading"
    className='loader'>
    <div className='morning-div'>
      <div className='left'>

          <div id="left-right-inner">
                <div id="left-inner" className="corners animate__animated animate__zoomIn">
                  <div id="single-key" className='blue-op-left'>
                    <p className='single-value'>Date </p>
                    <p className='single-value'>US 10 Year Try Yield </p>
                    <p className='single-value'>US Inflation rate </p>
                    <p className='single-value'>6.54% GS 2032 </p>
                    <p className='single-value'>10 year SDL Rate </p>
                    <p className='single-value'>MIBOR Rate </p>
                    <p className='single-value'>BRENT CRUDE </p>
                    <p className='single-value'>5 year PSU (AAA) </p>
                    <p className='single-value'>10 year PSU (AAA) </p>
                  </div>
                  <div id="single-value" className='grey-op-left'>
                      <p className="single-value black bold">&nbsp;{newData.date}</p>
                      <p className='single-value black'>&nbsp; <span className={parseFloat(newData.try_yield) === parseFloat(oldData.try_yield) ? 'black' : parseFloat(newData.try_yield) > parseFloat(oldData.try_yield) ? 'green' : 'red'}>{newData.try_yield}&nbsp;%</span></p>
                      <p className='single-value black'>&nbsp; <span className={parseFloat(newData.us_inflat) === parseFloat(oldData.us_inflat) ? 'black' : parseFloat(newData.us_inflat) > parseFloat(oldData.us_inflat) ? 'green' : 'red'}>{newData.us_inflat}&nbsp;%</span></p>
                      <p className='single-value black'>&nbsp; <span className={parseFloat(newData.gs) === parseFloat(oldData.gs) ? 'black' : parseFloat(newData.gs) > parseFloat(oldData.gs) ? 'green' : 'red'}>{newData.gs}&nbsp;%</span></p>
                      <p className='single-value black'>&nbsp; <span className={parseFloat(newData.sdl) === parseFloat(oldData.sdl) ? 'black' : parseFloat(newData.sdl) > parseFloat(oldData.sdl) ? 'green' : 'red'}>{newData.sdl}&nbsp;%</span></p>
                      <p className='single-value black'>&nbsp; <span className={parseFloat(newData.mibor) === parseFloat(oldData.mibor) ? 'black' : parseFloat(newData.mibor) > parseFloat(oldData.mibor) ? 'green' : 'red'}>{newData.mibor}&nbsp;%</span></p>
                      {/* <p className='single-value black'>&nbsp; <span className={newData.mibor === oldData.mibor ? 'black' : newData.mibor > oldData.mibor ? 'green' : 'red'}>{newData.mibor}&nbsp;%</span></p> */}
                      <p className='single-value black'>&nbsp; <span className={parseFloat(newData.brent) === parseFloat(oldData.brent) ? 'black' : parseFloat(newData.brent) > parseFloat(oldData.brent) ? 'green' : 'red'}>${newData.brent}</span></p>
                      <p className='single-value black'>&nbsp; <span>{newData.psu_5}&nbsp;%</span></p>
                      <p className='single-value black'>&nbsp; <span>{newData.psd_10}&nbsp;%</span></p>
                  </div>
             </div>
                <div id="right-inner" className="corners">
                <div id="single-key" className='blue-op-left'>
                    <p className='single-value'>Gold </p>
                    <p className='single-value'>Silver </p>
                    <p className='single-value'>Copper</p>
                    <p className='single-value'>Cotton</p>
                    <p className='single-value'>Natural Gas</p>
                    <p className='single-value'>USD</p>
                    <p className='single-value'>EUR</p>
                    <p className='single-value'>JPY</p>
                    <p className='single-value'>CNY</p>
                  </div>
                  <div id="single-value" className='grey-op-left'>
                    {/* Commodities */}
                      <p className='single-value black'>&nbsp; <span className={parseFloat(newData.gold) === parseFloat(oldData.gold) ? 'black' : parseFloat(newData.gold) > parseFloat(oldData.gold) ? 'green' : 'red'}>{newData.gold}&nbsp;INR</span></p>
                      <p className='single-value black'>&nbsp; <span className={parseFloat(newData.silver) === parseFloat(oldData.silver) ? 'black' : parseFloat(newData.silver) > parseFloat(oldData.silver) ? 'green' : 'red'}>{newData.silver}&nbsp;INR</span></p>
                      <p className='single-value black'>&nbsp; <span className={parseFloat(newData.copper) === parseFloat(oldData.copper) ? 'black' : parseFloat(newData.copper) > parseFloat(oldData.copper) ? 'green' : 'red'}>{newData.copper}&nbsp;INR</span></p>
                      <p className='single-value black'>&nbsp; <span className={parseFloat(newData.cotton) === parseFloat(oldData.cotton) ? 'black' : parseFloat(newData.cotton) > parseFloat(oldData.cotton) ? 'green' : 'red'}>{newData.cotton}&nbsp;INR</span></p>
                      <p className='single-value black'>&nbsp; <span className={parseFloat(newData.gas) === parseFloat(oldData.gas) ? 'black' : parseFloat(newData.gas) > parseFloat(oldData.gas) ? 'green' : 'red'}>{newData.gas}&nbsp;INR</span></p>
                    {/* Currencies */}
                      <p className='single-value black'>&nbsp; <span className={parseFloat(newData.usd) === parseFloat(oldData.usd) ? 'black' : parseFloat(newData.usd) > parseFloat(oldData.usd) ? 'green' : 'red'}>{newData.usd}&nbsp;INR</span></p>
                      <p className='single-value black'>&nbsp; <span className={parseFloat(newData.euro) === parseFloat(oldData.euro) ? 'black' : parseFloat(newData.euro) > parseFloat(oldData.euro) ? 'green' : 'red'}>{newData.euro}&nbsp;INR</span></p>
                      <p className='single-value black'>&nbsp; <span className={parseFloat(newData.jpy) === parseFloat(oldData.jpy) ? 'black' : parseFloat(newData.jpy) > parseFloat(oldData.jpy) ? 'green' : 'red'}>{newData.jpy}&nbsp;INR</span></p>
                      <p className='single-value black'>&nbsp; <span className={parseFloat(newData.cny) === parseFloat(oldData.cny) ? 'black' : parseFloat(newData.cny) > parseFloat(oldData.cny) ? 'green' : 'red'}>{newData.cny}&nbsp;INR</span></p>
                      
                  </div>
                  {/* <div id="date" className="corners date-usd animate__animated animate__zoomIn">Date - {newData.date}</div> */}
                  {/* <div className={newData.usd_d>=0? 'usd_green corners date-usd animate__animated animate__zoomIn' : 'usd_red corners date-usd animate__animated animate__zoomIn'}>1 USD = {newData.usd_o} INR</div> */}
                </div>
          </div>
          <div id="bottom-inner" className="corners animate__animated animate__zoomIn">
            {/* key */}
            <div className='double-outer grey-op'>
              <p className='bold'>SYMBOL</p>
              <p className='double-value bold'>NASDAQ</p>
              <p className='double-value bold'>SENSEX</p>
              <p className='double-value bold'>SGX NIFTY</p>
              <p className='double-value bold'>CNX NIFTY</p>
              {/* <p className='double-value bold'>USD/INR</p> */}
            </div>
            {/* opening values */}
            <div className='double-outer green-op'>
              <p className='bold'>OPEN</p>
              <p className='double-value'><span className={parseFloat(newData.nasdaq_o) === parseFloat(oldData.nasdaq_o) ? 'black' : parseFloat(newData.nasdaq_o) > parseFloat(oldData.nasdaq_o) ? 'green' : 'red'}>{newData.nasdaq_o}</span> &nbsp;  </p>
              <p className='double-value'><span className={newData.sensex_o === oldData.sensex_o ? 'black' : newData.sensex_o > oldData.sensex_o ? 'green' : 'red'}>{newData.sensex_o}</span> &nbsp;  </p>
              <p className='double-value'><span className={newData.sgx_o === oldData.sgx_o ? 'black' : newData.sgx_o > oldData.sgx_o ? 'green' : 'red'}>{newData.sgx_o}</span> &nbsp;  </p>
              <p className='double-value'><span className={newData.cnx_o === oldData.cnx_o ? 'black' : newData.cnx_o > oldData.cnx_o ? 'green' : 'red'}>{newData.cnx_o}</span> &nbsp;  </p>
              {/* <p className='double-value'><span className={newData.usd_o === oldData.usd_o ? 'black' : newData.usd_o > oldData.usd_o ? 'green' : 'red'}>{newData.usd_o}</span> &nbsp;  </p> */}
            </div>
            {/* closing values */}
            
            <div className='double-outer grey-op'>
            <p className='bold'>P. CLOSE</p>
              <p className='double-value'><span className={parseFloat(newData.nasdaq_c) === parseFloat(oldData.nasdaq_c) ? 'black' : parseFloat(newData.nasdaq_c) > parseFloat(oldData.nasdaq_c) ? 'green' : 'red'}>{newData.nasdaq_c}</span> &nbsp; </p>
              <p className='double-value'><span className={newData.sensex_c === oldData.sensex_c ? 'black' : newData.sensex_c > oldData.sensex_c ? 'green' : 'red'}>{newData.sensex_c}</span> &nbsp; </p>
              <p className='double-value'><span className={newData.sgx_c === oldData.sgx_c ? 'black' : newData.sgx_c > oldData.sgx_c ? 'green' : 'red'}>{newData.sgx_c}</span> &nbsp; </p>
              <p className='double-value'><span className={newData.cnx_c === oldData.cnx_c ? 'black' : newData.cnx_c > oldData.cnx_c ? 'green' : 'red'}>{newData.cnx_c}</span> &nbsp; </p>
              {/* <p className='double-value'><span className={newData.usd_c === oldData.usd_c ? 'black' : newData.usd_c > oldData.usd_c ? 'green' : 'red'}>{newData.usd_c}</span> &nbsp; </p> */}
            </div>
            
            {/* difference */}
            <div className='double-outer green-op'>
            <p className='bold'>CHANGE</p>
              <p className="double-value"><span className={parseFloat(newData.nasdaq_d) === 0 ? 'black' : parseFloat(newData.nasdaq_d) > 0 ? 'green' : 'red'}>{newData.nasdaq_d}&nbsp;%</span></p>
              <p className="double-value"><span className={parseFloat(newData.sensex_d) === 0 ? 'black' : newData.sensex_d > 0 ? 'green' : 'red'}>{newData.sensex_d}&nbsp;%</span></p>
              <p className="double-value"><span className={newData.sgx_d === 0 ? 'black' : newData.sgx_d > 0 ? 'green' : 'red'}>{newData.sgx_d}&nbsp;%</span></p>
              <p className="double-value"><span className={newData.cnx_d === 0 ? 'black' : newData.cnx_d > 0 ? 'green' : 'red'}>{newData.cnx_d}&nbsp;%</span></p>
              {/* <p className="double-value"><span className={newData.usd_d === 0 ? 'black' : newData.usd_d > 0 ? 'green' : 'red'}>{newData.usd_d}&nbsp;%</span></p> */}
            </div> 
          </div>  

      </div> 

        <div className='right'>

            <Gainers/>
           
        </div>
        
    </div>
    </LoadingOverlay>
  )
}

export default MorningComponent

