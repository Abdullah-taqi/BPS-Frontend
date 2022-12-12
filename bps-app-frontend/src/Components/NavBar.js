import React from 'react'
import {Link as Lnk} from 'react-router-dom'
// import {Link} from 'react-scroll'
import {useState} from 'react'
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Styles/Navbar.css'

function Navbar() {
  const [nav,setnav] = useState(false);
  const[blockNav,setBlockNav]=useState(false);

  const handleToggle = () => {
    setBlockNav(!blockNav);
  }
  
  const closeNavMenu = () => {
    setBlockNav(false);
  }
  const [toggleNavItem, setToggleNavItem] = useState(1);
  const navToggle = (index) => {
    setToggleNavItem(index)
  }
  const changeBackground = () => {
      if (window.scrollY >= 50) {
          setnav(true);
      }
      else{
          setnav(false);
      }
    }   

    window.addEventListener('scroll', changeBackground);

  return(
<nav className={nav ? 'nav-active': 'nav'}>
          <div className='logo-div'>
          <Logo/>
          </div>
          <div id='bars' onClick={handleToggle}><FontAwesomeIcon className='bg' icon={faBars} size="2x" /></div>
          <div>

          <div className={blockNav ? 'navigation' : 'navigation-inactive'}>
            <ul className= "menu-navigation">
                <li className='navigation-items buttondesign'><Lnk to="/" onClick={closeNavMenu}>Home</Lnk></li>
                <li className='navigation-items buttondesign'><Lnk to="/about" onClick={closeNavMenu}>About</Lnk></li>
                <li className='navigation-items buttondesign'><Lnk to="/research" onClick={closeNavMenu}>Research</Lnk></li>
                <li className='navigation-items buttondesign'><Lnk to="/news" onClick={closeNavMenu}>News</Lnk></li>
                <li className='navigation-items buttondesign'><Lnk to="/careers" onClick={closeNavMenu}>Careers</Lnk></li>
                <li className='navigation-items buttondesign'><Lnk to="/contact" onClick={closeNavMenu}>Contact</Lnk></li>
            </ul>
        </div>
          
          <ul className= "menu">
            <li className={toggleNavItem===1? "nav-active-bg" : "nav-inactive-bg"}><Lnk to="/" onClick={()=>navToggle(1)}>Home</Lnk></li>
            <li className={toggleNavItem===2? "nav-active-bg" : "nav-inactive-bg"}><Lnk to="/about" onClick={()=>navToggle(2)}>About</Lnk></li>
            <li className={toggleNavItem===3? "nav-active-bg" : "nav-inactive-bg"}><Lnk to="/research" onClick={()=>navToggle(3)}>Research</Lnk></li>
            <li className={toggleNavItem===4? "nav-active-bg" : "nav-inactive-bg"}><Lnk to="/news"onClick={()=>navToggle(4)}>News</Lnk></li>
            <li className={toggleNavItem===5? "nav-active-bg" : "nav-inactive-bg"}><Lnk to="/careers" onClick={()=>navToggle(5)}>Careers</Lnk></li>
            <li className={toggleNavItem===6? "nav-active-bg" : "nav-inactive-bg"}><Lnk to="/contact" onClick={()=>navToggle(6)}>Contact</Lnk></li>
          </ul>
          </div>
</nav>
  )
  }
export default Navbar;