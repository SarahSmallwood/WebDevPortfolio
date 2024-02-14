import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className='header'>
        <button className='homeButton' as={Link} to='/App'>Sarah Elizabeth</button>
        <div className='navIcons'>
        <Link to="/aboutme">
            <div className="icon">ABOUT ME</div>
        </Link>
        <Link to="/Portfolio">
            <div className="icon">PORTFOLIO</div>
        </Link>
        <Link to="/Travel">
            <div className="icon">TRAVEL PHOTOGRAPHY</div>
        </Link>
        </div>
        

    </div>
  )
}

export default Header