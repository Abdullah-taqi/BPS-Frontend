import React, { useState } from 'react';
import { useEffect } from 'react';
import './Styles/Quote.css';
import 'animate.css'

function Quote() {

  const quotes=[
    {id:0, quote:"“When Alexander saw the breadth of his domain, he wept for there were no more worlds to conquer”"  , author: "― Plutarch"},
    {id:1, quote:"“Give me a lever long enough and a fulcrum on which to place it, an i shall move the world”"  , author: "― Archimedes"},
    {id:2, quote:"“When money realizes that it is in good hands, it wants to stay and multiply in those hands.”" , author: "― Idowu Koyenikan"},
  
  ];
  const [quoteData,setquoteData]=useState(quotes[2].quote)
  const [authorData,setAuthorData]=useState(quotes[2].author)

  const handleChange=(index)=>{
    const quoteslider=quotes[index].quote;
    const authorSlider=quotes[index].author;

    setquoteData(quoteslider)
    setAuthorData(authorSlider)

  }

  useEffect(() => {
    const interval = setInterval(() => {
      quotes.map(
        (data,i) => 
        setTimeout(() => {
        handleChange(i);
      }, 5000*i)

      )   
    }, 15000);
  
    return () => clearInterval(interval);
  }, [handleChange, quotes]);
  

  return (
    <div className='title-section animate__animated animate__slideInRight'>
        <div className='title-body'>
            <h1 className='heading'>Success</h1> 
            <h1 className='heading'>Defined</h1> 
            <p className='quote'> { quoteData } </p>
            <p className='author'> { authorData } </p>
        </div>
    </div>

    
  );
}

export default Quote;