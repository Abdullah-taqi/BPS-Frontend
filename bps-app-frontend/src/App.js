import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/NavBar';
import Header from './Components/Header';
import Background from './Components/Background';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import News from './Components/News';
import Research from './Components/Research';
import About from './Components/About';
import Careers from './Components/Careers';
import ScrollToTop from './Components/ScollToTop'

function App() {
return (
  <div className="App">
        <div className="nav-open-div"></div>
    <Router>
      <ScrollToTop/>
        <Navbar />
        <Routes>
            <Route exact path='/' element={<React.Fragment><Header /><Background /><Footer/></React.Fragment>}></Route>
            <Route exact path='/about' element={<React.Fragment><Background /><About/></React.Fragment>}></Route>
            <Route exact path='/research' element={<React.Fragment><Background /><Research/></React.Fragment>}></Route>
            <Route exact path='/news' element={<React.Fragment><Background /><News/></React.Fragment>}></Route>
            <Route exact path='/careers' element={<React.Fragment><Background /><Careers/></React.Fragment>}></Route>
            <Route exact path='/contact' element={<React.Fragment><Background /><Contact/></React.Fragment>}></Route> 
        </Routes>
        
    </Router>
    </div>  
  );
}
export default App;

