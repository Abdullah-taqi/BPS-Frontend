import React from 'react'
import './Styles/News.css'
import NewsList from './NewsList'
import 'animate.css';
import Footer from './Footer'

function News() {
  return (
    <div className='news'>
            <h2 id='dailyupdates' className='animate__animated animate__fadeInDown'>Daily Updates!</h2>
            <NewsList/>
            <Footer/>
    </div>
    
  )
}

export default News