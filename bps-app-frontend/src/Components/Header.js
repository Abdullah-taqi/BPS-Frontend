// import React from 'react'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import './Styles/Header.css'
import React from "react";
// import StocksData from './StocksData';
import Quote from './Quote';
import MorningComponent from './MorningComponent';
import AboutComponent from './AboutComponent';
import Axios from 'axios'
import protobuf from 'protobufjs'

import { useEffect, useState,useRef } from 'react'

var { Buffer } = require ('buffer/');

function formatData (stkData){
  // stkData = stkData.toFixed(2);
  if (stkData){
    return `${Number(stkData.toFixed(2)).toLocaleString()}`}
}


function Header() {
  const ref = useRef(null);

  const [nsei,setNsei] = useState({})
  const [bsesn,setBsesn] = useState({})
  const [ixic,setIxic] = useState({})
  const [gdaxi,setGdaxi] = useState({})
  const [dji,setDji] = useState({})
  const [fchi,setFchi] = useState({})
  // const [bzf,setBzf] = useState({})


  const slide = (shift) => {
    ref.current.scrollLeft += shift;
  };


  useEffect(() => {
    Axios.get("https://bps-app.herokuapp.com/get-nsei").then(
      (res) =>{
          
          // if (res.data.length === 1 ){
          setNsei(res.data)
          // }
      }
    )
    Axios.get("https://bps-app.herokuapp.com/get-bsesn").then(
      (res) =>{
            if (res.data.length !== 0 ){
          setBsesn(res.data)}
      }
    )  
  Axios.get("https://bps-app.herokuapp.com/get-ixic").then(
    (res) =>{
        setIxic(res.data)
    }
)  
  Axios.get("https://bps-app.herokuapp.com/get-gdaxi").then(
    (res) =>{
        setGdaxi(res.data)
    }
)  
  Axios.get("https://bps-app.herokuapp.com/get-fchi").then(
    (res) =>{
        setFchi(res.data)
    }
)   
//   Axios.get("https://bps-app.herokuapp.com/get-bzf").then(
//     (res) =>{
//         setBzf(res.data)
//     }
// )   
  Axios.get("https://bps-app.herokuapp.com/get-dji").then(
    (res) =>{
        setDji(res.data)
    }
)  


const ws = new WebSocket('wss://streamer.finance.yahoo.com');
const root = protobuf.load('./YPricingData.proto', (error,root) => {

    if(error){
        console.log(error);
    }

    const Yaticker = root.lookupType("yaticker");   


    ws.onopen = function open() {
    // console.log('connected');
    ws.send(JSON.stringify({
        subscribe: ["^NSEI", "^BSESN", "^IXIC", "^GDAXI", "^FCHI", "^BZ=F", "^DJI"]
    }));
    };

    ws.onclose = function close() {
    // console.log('disconnected');
    };

    ws.onmessage = async function incoming(message) {
    // console.log('comming message')
    // console.log()
        const next = Yaticker.decode(new Buffer(message.data, 'base64'));
        // console.log(next);

        let name = next.id
        let price = next.price
        let changePercent = next.changePercent

        // console.log("name", name, "price", price, "change" , changePercent)
        // console.log(name)


        if (name === "^NSEI") {
          let obj = {
            name,
            price,
            changePercent
          }
          setNsei(obj)
        }

        if (name === "^BSESN") {
          // console.log(2)
          let obj = {
            name,
            price,
            changePercent
          }
          setBsesn(obj)
        }

        if (name === "^GDAXI") {
          // console.log(3)
          let obj = {
            name,
            price,
            changePercent
          }
          setGdaxi(obj)
        }

        if (name === "^IXIC") {
          // console.log(4)
          let obj = {
            name,
            price,
            changePercent
          }
          setIxic(obj)
        }

        if (name === "^FCHI") {
          // console.log(6)
          let obj = {
            name,
            price,
            changePercent
          }
          setFchi(obj)
        }

        if (name === "^DJI") {
          // console.log(7)
          let obj = {
            name,
            price,
            changePercent
          }
          setDji(obj)
        }

    };

});

},[])  



  return (
    <div id="New-header">
      <div id="main">
        <Quote/>
      </div>
      <div id='badge-div'>
        <div id='badge'>
          <div className='badge-scroll'>
            <button className="prev badge-nav-icons" onClick={() => slide(-200)}>
              <i><IoIosArrowDropleftCircle size={40}/></i> 
            </button>
          <div className='badge-body' ref = {ref} >
                            <a href="/" className="symbol-tI2rVa43">
                              <img className="tv-circle-logo tv-circle-logo--xsmall logo-tI2rVa43" src="https://s3-symbol-logo.tradingview.com/indices/nifty-50.svg" alt=""/>
                              <div className="symbolInfo-tI2rVa43">
                                <span className="name-tI2rVa43">NIFTY</span>

                                {/* <StocksData Ticker = 'NSEI' Cur = 'INR'/> */}
                                            
                                <div className="animationBlock-tI2rVa43">
                                  <div className="animationWrapper-tI2rVa43">
                                    <span className="symbolValueText-tI2rVa43 translateUpFirstItem-tI2rVa43">
                                      <span>{formatData(nsei.price)}</span>
                                      <span className="currencySign-tI2rVa43">&nbsp;INR</span>
                                    </span>
                                    <span className={`symbolValueText-tI2rVa43 ${ nsei.changePercent > 0 ? 'posValue-tI2rVa43': nsei.changePercent < 0 ? 'negativeValue-tI2rVa43' : '' } translateUpSecondItem-tI2rVa43`}>&nbsp;&nbsp;{formatData(nsei.changePercent)} %</span>
                                  </div>
                                </div>
                              </div>
                            </a>

                            <a href="/" className="symbol-tI2rVa43">
                              <img className="tv-circle-logo tv-circle-logo--xsmall logo-tI2rVa43" src="https://s3-symbol-logo.tradingview.com/indices/bse-sensex.svg" alt=""/>
                              <div className="symbolInfo-tI2rVa43">
                                <span className="name-tI2rVa43">SENSEX</span>

                                {/* <StocksData Ticker = 'NSEI' Cur = 'INR'/> */}

                                <div className="animationBlock-tI2rVa43">
                                  <div className="animationWrapper-tI2rVa43">
                                    <span className="symbolValueText-tI2rVa43 translateUpFirstItem-tI2rVa43">
                                      <span>{formatData(bsesn.price)}</span>
                                      <span className="currencySign-tI2rVa43">&nbsp;INR</span>
                                    </span>
                                    <span className={`symbolValueText-tI2rVa43 ${ bsesn.changePercent > 0 ? 'posValue-tI2rVa43': bsesn.changePercent < 0 ? 'negativeValue-tI2rVa43' : '' } translateUpSecondItem-tI2rVa43`}>&nbsp;&nbsp;{formatData(bsesn.changePercent)} %</span>
                                  </div>
                                </div>
                              </div>
                            </a>

                            {/* <a href="/" className="symbol-tI2rVa43">
                            <img className="tv-circle-logo tv-circle-logo--xsmall logo-tI2rVa43" src="https://s3-symbol-logo.tradingview.com/crude-oil.svg" alt=""/>
                            <div className="symbolInfo-tI2rVa43">
                            <span className="name-tI2rVa43">BRENT CRUDE</span>

                            // <StocksData Ticker = 'BZ=F' Cur = 'USD'/>

                            <div className="animationBlock-tI2rVa43">
                                <div className="animationWrapper-tI2rVa43">
                                  <span className="symbolValueText-tI2rVa43 translateUpFirstItem-tI2rVa43">
                                    <span>{formatData(bzf.price)}</span>
                                    <span className="currencySign-tI2rVa43">&nbsp;INR</span>
                                  </span>
                                  <span className={`symbolValueText-tI2rVa43 ${ bzf.changePercent > 0 ? 'posValue-tI2rVa43': bzf.changePercent < 0 ? 'negativeValue-tI2rVa43' : '' } translateUpSecondItem-tI2rVa43`}>&nbsp;&nbsp;{formatData(bzf.changePercent)} %</span>
                                </div>
                              </div>
                            </div>
                            </a>  */}

                            <a href="/" className="symbol-tI2rVa43">
                            <img className="tv-circle-logo tv-circle-logo--xsmall logo-tI2rVa43" src="https://s3-symbol-logo.tradingview.com/nasdaq.svg" alt=""/>
                            <div className="symbolInfo-tI2rVa43">
                            <span className="name-tI2rVa43">NASDAQ Composite</span>
                      
                            {/* <StocksData Ticker = '^IXIC' Cur = 'USD' /> */}

                            <div className="animationBlock-tI2rVa43">
                  <div className="animationWrapper-tI2rVa43">
                    <span className="symbolValueText-tI2rVa43 translateUpFirstItem-tI2rVa43">
                      <span>{formatData(ixic.price)}</span>
                      <span className="currencySign-tI2rVa43">&nbsp;INR</span>
                    </span>
                    <span className={`symbolValueText-tI2rVa43 ${ ixic.changePercent > 0 ? 'posValue-tI2rVa43': ixic.changePercent < 0 ? 'negativeValue-tI2rVa43' : '' } translateUpSecondItem-tI2rVa43`}>&nbsp;&nbsp;{formatData(ixic.changePercent)} %</span>
                  </div>
                </div>
                            
                            </div>
                            </a>

                            <a href="/" className="symbol-tI2rVa43">
                            <img className="tv-circle-logo tv-circle-logo--xsmall logo-tI2rVa43" src="https://s3-symbol-logo.tradingview.com/indices/dow-30.svg" alt=""/>
                            <div className="symbolInfo-tI2rVa43">
                            <span className="name-tI2rVa43">DOWJONES</span>

                          {/* <StocksData Ticker = 'DJI' Cur = 'USD' /> */}


                          <div className="animationBlock-tI2rVa43">
                  <div className="animationWrapper-tI2rVa43">
                    <span className="symbolValueText-tI2rVa43 translateUpFirstItem-tI2rVa43">
                      <span>{formatData(dji.price)}</span>
                      <span className="currencySign-tI2rVa43">&nbsp;INR</span>
                    </span>
                    <span className={`symbolValueText-tI2rVa43 ${ dji.changePercent > 0 ? 'posValue-tI2rVa43': dji.changePercent < 0 ? 'negativeValue-tI2rVa43' : '' } translateUpSecondItem-tI2rVa43`}>&nbsp;&nbsp;{formatData(dji.changePercent)} %</span>
                  </div>
                </div>

                            </div>
                            </a>

                            <a href="/" className="symbol-tI2rVa43">
                            <img className="tv-circle-logo tv-circle-logo--xsmall logo-tI2rVa43" src="https://s3-symbol-logo.tradingview.com/indices/cac-40.svg" alt=""/>
                            <div className="symbolInfo-tI2rVa43">
                            <span className="name-tI2rVa43">CAC</span>

                          {/* <StocksData Ticker = '^FCHI' Cur = 'EUR' /> */}

                          <div className="animationBlock-tI2rVa43">
                  <div className="animationWrapper-tI2rVa43">
                    <span className="symbolValueText-tI2rVa43 translateUpFirstItem-tI2rVa43">
                      <span>{formatData(fchi.price)}</span>
                      <span className="currencySign-tI2rVa43">&nbsp;INR</span>
                    </span>
                    <span className={`symbolValueText-tI2rVa43 ${ fchi.changePercent > 0 ? 'posValue-tI2rVa43': fchi.changePercent < 0 ? 'negativeValue-tI2rVa43' : '' } translateUpSecondItem-tI2rVa43`}>&nbsp;&nbsp;{formatData(fchi.changePercent)} %</span>
                  </div>
                          </div>

                            </div>
                            </a> 

                            <a href="/" className="symbol-tI2rVa43">
                              <img className="tv-circle-logo tv-circle-logo--xsmall logo-tI2rVa43" src="https://s3-symbol-logo.tradingview.com/country/DE.svg" alt=""/>
                              <div className="symbolInfo-tI2rVa43">
                              <span className="name-tI2rVa43">DAX</span>
                              
                              {/* <StocksData Ticker = '^GDAXI' Cur = 'EUR'/> */}

                              <div className="animationBlock-tI2rVa43">
                  <div className="animationWrapper-tI2rVa43">
                    <span className="symbolValueText-tI2rVa43 translateUpFirstItem-tI2rVa43">
                      <span>{formatData(gdaxi.price)}</span>
                      <span className="currencySign-tI2rVa43">&nbsp;INR</span>
                    </span>
                    <span className={`symbolValueText-tI2rVa43 ${ gdaxi.changePercent > 0 ? 'posValue-tI2rVa43': gdaxi.changePercent < 0 ? 'negativeValue-tI2rVa43' : '' } translateUpSecondItem-tI2rVa43`}>&nbsp;&nbsp;{formatData(gdaxi.changePercent)} %</span>
                  </div>
                </div>

                              </div>
                            </a> 

                      </div>
                      <button className="next badge-nav-icons" onClick={() => slide(+200)}>
                      <i ><IoIosArrowDroprightCircle size={40}/></i> 
                      </button>
                </div>
                      
                      
                </div>
                </div>
                <div className='About-title'>
                  Morning &nbsp; Updates
                </div>
                <MorningComponent/>
                <div className="home-about">
                  <AboutComponent/>
                </div>
                {/* <div id='slider-div'><Slider imgsrc = 'img-' length = '5' alt='slide'/></div> */}
                
                
    </div>
  )
}
export default Header