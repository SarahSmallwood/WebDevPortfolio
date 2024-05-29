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
          <img alt='portrait' className='sarahPic'src='https://media.discordapp.net/attachments/1135935108650635327/1195078014199922758/IMG_4646.jpg?ex=66562822&is=6654d6a2&hm=e59bc6f51380059cd46ddab6c00709d0b95499015bbdae1f2f55a77d38150e68&=&format=webp&width=1137&height=853'/>
        </div>
    </div>
  )
}

export default AboutMe