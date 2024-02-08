import React from 'react';
import {Link} from 'react-router-dom';
import Travel from '../../pages/Travel/Travel';
import AboutMe from '../../pages/AboutMe/AboutMe';
import Skills from '../../pages/Skills/Skills';
import Portfolio from '../../pages/Portfolio/Portfolio';
import './Header.css';

function Header() {
  return (
    <div className='header'>
        <button className='homeButton' as={Link} to='/'>Sarah Elizabeth</button>
        <Link to="/aboutme">
            <div className="icon">ABOUT ME</div>
        </Link>
        <Link to="/travel">
            <div className="icon">TRAVEL PHOTOGRAPHY</div>
        </Link>
        <Link to="/portfolio">
            <div className="icon">PORTFOLIO</div>
        </Link>
        <Link to="/skills">
            <div className="icon">SKILLS</div>
        </Link>

    </div>
  )
}

export default Header