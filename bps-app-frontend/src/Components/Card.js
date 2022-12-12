import * as React from "react";
import './Styles/Card.css'
import {useState} from 'react'
// import CustomHook from './customHook'

// const [volChart,setvolChart] = useState(false);
// const vol2=true;

// const useMyFirstCustomHook = () => {
//   const [volChart, setvolChart] = useState(false);
//   // do some stuff
//   return { volChart, setvolChart };
// };
var num=0;

const Card = (props) => {
//functions for indicators
  const rsi=()=>{
    num = 1;
  }
  const vol=()=>{
    num = 2;
  }
  const ma=()=>{
    num = 3;
  }
  const macd=()=>{
    num = 4;
  }
  const bb=()=>{
    num = 5;
  }

//functions for chart types  
  const trend=()=>{
    num = 11;
  }
  const alerts=()=>{
    num = 22;
  }
  const fib=()=>{
    num = 33;
  }
  const equi=()=>{
    num = 44;
  }
  const sd=()=>{
    num = 55;
  }
 

  return (
    <div className="wrapper">
    <div className="card">
      <div className="card__body">
        <h2 className="card__title">Indicators</h2>
      </div>
      <button className="card__btn" onClick={rsi}>RSI AND ATR</button>
      <button className="card__btn" onClick={vol}>VOLUME PROFILE</button>
      <button className="card__btn" onClick={ma}>MOVING AVERAGE</button>
      <button className="card__btn" onClick={macd}>MACD</button>
      <button className="card__btn" onClick={bb}>BOLLINGER BAND</button>

          </div>

    <div className="card">
      <div className="card__body">
        <h2 className="card__title">CHART TYPES</h2>
      </div>
      <button className="card__btn" onClick={trend}>TRENDLINE</button>
      <button className="card__btn" onClick={alerts}>INTERACTIVE ALERTS</button>
      <button className="card__btn" onClick={fib}>FIBBIONACCI RETRACEMENT</button>
      <button className="card__btn" onClick={equi}>EQUIDISTANT CHANNEL</button>
      <button className="card__btn" onClick={sd}>STANDARD DEVIATION CHANNEL</button>

    </div>
    </div>
  )
}

// export default Card;
export {num};
export default Card;

