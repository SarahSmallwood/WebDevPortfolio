import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// import AboutMe from '../../pages/AboutMe/AboutMe';
// import ContactForm from '../../pages/ContactForm/ContactForm';
// import TravelGallery from '../TravelGallery/TravelGallery';
// import Gallery from '../Portfolio/Portfolio';

function Header() {
  return (
    <div className='header'>
        <button className='homeButton' as={Link} to='/App'>Sarah Elizabeth</button>
        <div className='navIcons'>
        <Link path="/gallery">
            <button className="icon">PORTFOLIO</button>
          </Link>
          <Link to="/travel">
            <button className="icon">GALLERY</button>
          </Link>
          <Link to="/contactform">
            <button className="icon">SKILLS</button>
          </Link>
          <Link to="/aboutme">
            <button className="icon">ABOUT ME</button>
          </Link>
        </div>
    </div>
  )
}

export default Header