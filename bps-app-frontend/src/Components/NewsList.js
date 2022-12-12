import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'
import DefaultImg from '../images/default-news.png'
import MorningScan from './MorningScan'
import MospiUpdate from './MospiUpdate'
import LoadingOverlay from 'react-loading-overlay';

const NewsList = () => {
        const current = new Date();
        const options = { month: 'long'};
        const month = new Intl.DateTimeFormat('en-US', options).format(current.getMonth());  
        const date = `${month} ${current.getDate()} ,  ${current.getFullYear()}`;
        const [articles, setArticles] = useState([])
        const [isActive, setIsActive] = useState(true)
        useEffect(()=>{
            const getArticles = async () =>{
                const response = await axios.get('https://bps-app.herokuapp.com/news-update')
                setIsActive(false)
                setArticles(response.data.articles)
            } 
            getArticles()
        },[])
            
        return (
            <LoadingOverlay
            active={isActive}
            spinner
            text = "Loading">
            <div className='news-list'>
                <div className="news-left">
                    {articles.map((article, i) => {
                        return(
                        <NewsItem
                            key ={i}
                            title = {article.title === "NaN" ? "" : article.title}
                            description = {article.desc === "NaN" ? "" : article.desc}
                            url = {article.url === "NaN" ? 'https://www.moneycontrol.com/' : article.url}
                            urlToImage = {article.img === "NaN" ? DefaultImg : article.img}
                            publishedAt = {article.date === "NaN" ? date : article.date}
                            source = {"Moneycontrol"}
                        />
                        )
                    })}
                </div>
                <div className="news-right">
                    <MorningScan/>
                    <MospiUpdate/>
                </div>
            </div>
            </LoadingOverlay>
        )
}

export default NewsList