import './AboutMe.css';
import React from 'react';
import ContactButton from '../../components/ContactButton/ContactButton';


function AboutMe() {
  return (
    <div className='AboutMe'>
        <div className='aboutText'>
          <h2 className='sarah'>LET'S DESIGN SOMETHING INCREDIBLE </h2>
          <br/>
          <p className='about'>
          IF YOU ARE SEARCHING FOR A DESIGNER TO CREATE YOUR NEXT WEBSITE, LOOK NO FURTHER. I HAVE TRAVELED THE WORLD, AND HAVE EARTH'S BEAUTY AS INSPIRATION. TOGETHER WE CAN MAKE YOUR DREAM DESIGN IDEAS COME TO FRUITION. CLICK THE LINK BELOW AND LET'S CREATE TOGETHER!
          </p>
          <ContactButton />
        </div>
        <div className='right'>
          <img alt='portrait' className='sarahPic'src='https://ik.imagekit.io/v64tipjbn/Final%20Portfolio/portfolio7.png?updatedAt=1717716297528'/>
        </div>
    </div>
  )
}

export default AboutMe