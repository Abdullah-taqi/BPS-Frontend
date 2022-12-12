import React from 'react'
import {useState} from "react";
import './Styles/morning-component.css'
import 'animate.css'
import NiftyComponent from './NiftyComponent';
import SpComponent from './SpComponent';
import CacComponent from './CacComponent';
import SgxComponent from './SgxComponent';


function Gainers() {
    const [toggleSelect, setToggleSelect] = useState("nifty");
    const toggleMenu = (index) => {
        setToggleSelect(index);
        // console.log(toggleSelect);
  }
  return (
    <div className='gainers'>


                <div id="title-dropdown">
                        <div id="gainer-title">TOP 5 GAINERS</div>  
                        <select defaultValue={"nifty"} onChange={(value)=>toggleMenu(value.target.value)}>              
                            <option value="nifty">Nifty 50</option>
                            <option value="sp">S&amp;P 500</option>
                            <option value="cac">CAC 40</option>
                            <option value="sgx">SGX</option>
                        </select>
                </div>
                <div className={toggleSelect === "nifty" ? "gainer-table" : "gainer-table hide-table"}>
                    <NiftyComponent/>
                </div>  
                <div className={toggleSelect === "sp" ? "gainer-table" : "gainer-table hide-table"}>
                    <SpComponent/>
                </div>  
                <div className={toggleSelect === "cac" ? "gainer-table" : "gainer-table hide-table"}>
                    <CacComponent/>
                </div>  
                <div className={toggleSelect === "sgx" ? "gainer-table" : "gainer-table hide-table"}>
                    <SgxComponent/>
                </div>  
                </div>
               
 
      

  )
}

export default Gainers