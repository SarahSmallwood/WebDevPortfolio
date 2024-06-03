import React from 'react';
import './Personal.css';
import { SkillBar } from 'react-skillbars';

function Personal() {
    const skills = [
        {type: "HTML5", level: 90},
        {type: "CSS3", level: 85},
        {type: "Javascript", level: 71},
        {type: "MERN.js", level: 75},
        {type: "Backend", level: 70}
    ]
  return (
    <div className='personalPage'>
        <div className='element1'>Sarah Smallwood with a base in SCOTTSDALE, ARIZONA</div>
        <div className='element2'>
             A junior software engineer, front end developer, software developer, UI/UX DESIGN
             <br> 
             </br>
             An emerging talent for eye-catching design creations
             <br>
             </br>
             Focus on creating websites catered to clients needs and ideas
             <br>
             </br>
             Open to new oppotunities in web design and development. Please do not hesitate to contact with questions.
             <br>
             </br>
             Find my email below or click the link above to connect with me.

        
        
        
        </div>
        <div className='element3'>
            <SkillBar skills={skills}/>

        </div>
    </div>
  )
}

export default Personal