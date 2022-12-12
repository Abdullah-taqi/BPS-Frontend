import React from 'react'
import './Styles/News.css'
import defaultimg from '..//images/default-news.png'

const NewsItem = ({title, description, source, url, urlToImage, publishedAt}) => {
  return (
        <div className="news-item">
        <div className="news-item-flex">
              <div className="leftnewsitem"><img className='news-img' src={urlToImage || defaultimg} alt={urlToImage}/>
              </div>
              <div className="rightnewsitem"><h3>{title}</h3>
                  <p className='news-desc'>{description}</p>
                  
              </div>
        </div>
            <div className="date-time-source">
            <p>Published : {publishedAt}</p>
            <p>Source : {source}</p>
            <a href={url} target="_blank" rel="noreferrer">
                      <button id = "read-more-btn">Read more</button>
                  </a>
            </div>
            
        </div>
      
  )
}

export default NewsItem