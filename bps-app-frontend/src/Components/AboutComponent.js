import React from 'react'
import Slider from './Slider/Slider'

function AboutComponent() {
  return (
    <div>
        <div className="about-content-div">
           <div className='inner-about-content' id='about-img'><Slider imgsrc = 'img-' length = '4' alt='slide'/></div>
           <div className='inner-about-content' id='about-content'>
             <div className='animate__animated animate__zoomIn'>
                   <p><a href='https://bpstech.in/'><b id='text-red'>BPS Tech</b></a> is a subsidiary of 
                      <a href='https://www.focusenergy.co.in/' target={"_blank"}><b id='text-blue'>&nbsp;Focus Energy</b></a>. 
                          We are a team of young, enthusiastic and versatile minds. 
                          Presently, we are in the early-stage of our development and making the best trading platform 
                          which can help us to make the best profits out of our investment.
                          We invest in a wide range of asset classes including stocks, bonds and derivatives. 
                          Additionally, We also have a full-fledged research and analytical team of top-notched professionals 
                          from the industry to offer us the impeccable research and advisory.</p>
                          We use machine learning for designing a medium frequency trading strategy. Medium Frequency Trading (MFT)
                          is a trading method that leverages powerful computers to accomplish a large number of orders within minutes. 
                          MFT requires intra-day data for execution and has a market time frame of 5 seconds to 15 minutes.
                        <a href='https://www.google.com/maps/search/focus+energy/@28.442472,77.04014,15z?hl=en' target={"_blank"} rel="noreferrer"><span id="text-green"></span></a>
                   <p/>
                 </div>
           </div>
        </div>
    </div>
  )
}
export default AboutComponent