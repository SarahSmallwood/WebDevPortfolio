import React from 'react';
import './Footer.css';
import { SocialIcon } from 'react-social-icons';


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
        <img className='locationPin' alt='location pin logo' src='https://png.pngtree.com/png-vector/20190420/ourmid/pngtree-location-vector-icon-png-image_963325.jpg' />
        <div className='locationName'>SCOTTSDALE , AZ</div>
      </div>
      <div className='email'>
        <img className='emailLogo' alt='white envelope email logo' src='https://i.pinimg.com/originals/b2/a3/fb/b2a3fbd8bd83857c74ff274ecd79c40f.png' />
        <a className='emailName' href="sarahsmallwood56@gmail.com"> sarahsmallwood56@gmail.com</a>
      </div>
      <div className='otherLinks'></div>
    </div>
    </div>
  )
}

export default Footer