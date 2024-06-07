import React from 'react';
import './Portfolio.css';

function Gallery() {

return (
  <div className="gallery">
    
      <h1 className='galleryHead'>SOFTWARE DEVELOPMENT PORTFOLIO</h1>
      
        <ul className="list">
          <li className="item">
            <img src="https://ik.imagekit.io/v64tipjbn/Final%20Portfolio/portfolio4.png?updatedAt=1717716173930" alt="A screenshot of a Full Stack travel blogging application" className="content"/>
            <h3>A Full MERN Stack Travel Blogging Application</h3>
            </li>
          <li className="item">
            <img src="https://ik.imagekit.io/v64tipjbn/Final%20Portfolio/portfolio1.png?updatedAt=1717716172482" alt="Per Scholas website mockup" className="content"/>
            <h3> A MockUp of the PerScholas Website</h3>
            </li>
          <li className="item">
            <img src="https://ik.imagekit.io/v64tipjbn/Final%20Portfolio/portfolio3.png?updatedAt=1717716172279" alt="Whole Foods website mockup" className="content"/>
            <h3>Whole Foods Website MockUp</h3>
            </li>
          <li className="item">
            <img src="https://ik.imagekit.io/v64tipjbn/Final%20Portfolio/portfolio6.png?updatedAt=1717716174383" alt="Screenshot of an around the world trivia game" className="content"/>
            <h3>An Around the World Trivia Game built with Javascript</h3></li>
          <li className="item">
            <img src="https://ik.imagekit.io/v64tipjbn/Final%20Portfolio/portfolio5.png?updatedAt=1717716174231" alt="Space battle game screenshot with two space ships" className="content"/>
            <h3>A Space Battle Game built with JavaScript</h3></li>
        </ul>

      </div>
);
}



export default Gallery;
