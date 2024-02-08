import React from 'react';
import {Link} from 'react-router-dom';
import Travel from '../../pages/Travel/Travel';
import AboutMe from '../../pages/AboutMe/AboutMe';
import './Header.css';

function Header() {
  return (
    <div className='header'>
        <button className='homeButton' as={Link} to='/'>Sarah Elizabeth</button>
        <Link to="/aboutme">
            <div className="icon">ABOUT ME</div>
        </Link>
        <Link to="/travel">
            <div className="icon">TRAVEL</div>
        </Link>

    </div>
  )
}

export default Header