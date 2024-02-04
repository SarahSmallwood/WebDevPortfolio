import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className='header'>
        <button className='homeButton' onClick={<Link path='./App'/>}>Sarah Elizabeth</button>
    </div>
  )
}

export default Header