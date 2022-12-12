import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ResearchItem from './ResearchItem'
import LoadingOverlay from 'react-loading-overlay';

const ResearchList = () => {
  const [papers, setPapers] = useState([])
  const [isActive, setIsActive] = useState(true)
  useEffect(()=>{
      const getPapers = async () =>{
          const response = await axios.get('https://bps-app.herokuapp.com/research-update')
          setIsActive(false)
          setPapers(response.data.papers)
      } 
      getPapers()
  },[])
      
  return (
      
<LoadingOverlay
    active={isActive}
    spinner
    text = "Loading">
<div className='research-list'>
  {papers.map(paper => {
      return(
      <ResearchItem
          link = {paper.pdfurl}
          title = {paper.title}
          date = {paper.date}
      />
      
      )
  })}
</div>
  </LoadingOverlay>
)
}

export default ResearchList