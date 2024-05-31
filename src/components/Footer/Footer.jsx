import React from 'react';
import './Footer.css';
import { SocialIcon } from 'react-social-icons';
import { IoMailOpenOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoEarthOutline } from "react-icons/io5";


function Footer() {
  return (
    <div className="footer">
    <footer className="SubNav">
        <div className="icons">
            <SocialIcon url="https://www.linkedin.com/in/sarah-smallwood565/" style={{ height: 60, width: 60 }}/>
            <SocialIcon url="https://www.instagram.com/redhead.aroundtheworld/" style={{ height: 60, width: 60 }}/>
            <SocialIcon url="https://www.shutterstock.com/g/Redhead_ATW?_gl=1*1lym7eq*_ga*MTkwNjk3NzgzOC4xNjk3MjU1MDY1*_ga_5JRYE4Y8J9*MTcwNDk0MDExMi44LjEuMTcwNDk0MDEzMi40MC4wLjA.*_fplc*RnFvSlo4Sm0lMkZleWt0Sm9JbFQ5cWt0ODI0UThrek9qYktKVHdIT04wR3h1SjNQQm1qTHdwV3IyTlQlMkY5WlVYTlRldEJjQ01HQWk2NkpidVpFVSUyRmQwaSUyRnJTMkxEUVh0c1RhOW81bUpNQWRkaWRxa0JvZnEyN0N6VzZESyUyQnhzQSUzRCUzRA.." style={{ height: 60, width: 60, backgroundcolor: 'whitesmoke' }}/>
            <SocialIcon url="https://github.com/SarahSmallwood" style={{ height: 60, width: 60 }}/>
        </div>
    </footer>
    <div className='bottomRow'>
      <div className='location'>
      <IoLocationOutline className= 'react-icons'/>
        <h3 className='locationName'>SCOTTSDALE , AZ</h3>
      </div>
      <div className='email'>
      <IoMailOpenOutline className= 'react-icons'/>
        <a className='emailName' href="sarahsmallwood56@gmail.com"> sarahsmallwood56@gmail.com</a>
      </div>
      <div className='otherLinks'>
      <IoEarthOutline  className= 'react-icons'/>
        <h3 className='containerThree'>SARAH ELIZABETH SMALLWOOD</h3>
      </div>
    </div>
    </div>
  )
}

export default Footer