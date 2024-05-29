import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className='header'>
        <button className='homeButton' as={Link} to='/'>Sarah Elizabeth</button>
        <div className='navIcons'>
        <Link href="/aboutme">
            <div className="icon">ABOUT ME</div>
        </Link>
        <Link href="/Portfolio">
            <div className="icon">PORTFOLIO</div>
        </Link>
        <Link href="/Travel">
            <div className="icon">GALLERY</div>
        </Link>
        <Link to="/ContactForm">
            <div className="icon">CONTACT ME</div>
        </Link>
        </div>
        

    </div>
  )
}

export default Header