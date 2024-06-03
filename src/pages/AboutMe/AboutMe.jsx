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
          <img alt='portrait' className='sarahPic'src='https://media.discordapp.net/attachments/1135935108650635327/1195078014199922758/IMG_4646.jpg?ex=665a1ca2&is=6658cb22&hm=7c5a7132c1579505f2b39735205025f43c42e62fdb1273fdfeffd3c9e57e50a8&=&format=webp&width=1146&height=860'/>
        </div>
    </div>
  )
}

export default AboutMe