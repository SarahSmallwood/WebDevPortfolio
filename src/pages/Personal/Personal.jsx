import React from 'react';
import './Personal.css';
import { SkillBar } from 'react-skillbars';

function Personal() {
    const skills = [
        {type: "HTML5", level: 90},
        {type: "CSS3", level: 85},
        {type: "Javascript", level: 80},
        {type: "MERN.js", level: 75},
        {type: "Backend", level: 70}
    ]
  return (
    <div className='personalPage'>
        <div className='element1'>Sarah Smallwood with a base in SCOTTSDALE, ARIZONA</div>
        <div className='element2'>
          <h3>A junior software engineer, front end developer, software developer, UI/UX DESIGN.</h3>
          <br></br>
          <h3>An emerging talent for eye-catching design creations.</h3>
          <br></br>
          <h3>Focus on creating websites catered to clients needs and ideas.</h3>
          <br></br>
          <h3>Open to new opportunities in web design and development.</h3>
          <br></br>
          <h3>Find my email below or click the link above to connect with me.</h3>
        </div>
        <div className='element3'>
            <SkillBar skills={skills}/>

        </div>
    </div>
  )
}

export default Personal