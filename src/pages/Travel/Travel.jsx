// src/components/Layout.js
import React from 'react';
import TravelGallery from '../../components/TravelGallery/TravelGallery';
import './Travel.css';

const Travel = () => {
  return (
    <div className="layout">
        <h2 className='galleryTitle'>EXPLORE THE WORLD</h2>
        <p className='galleryHead'>PHOTOGRAPHY IS THE PASSION, THE PHOTO IS THE ART, AND THE SUBJECT IS EARTH'S ENDLESS BEAUTY...</p>
      <TravelGallery />
      <div className="gallery">
        {/* Gallery for photos */}
        <figure className="card">
        <img alt="" src="https://ik.imagekit.io/v64tipjbn/SarahPortfolio/Egypt/IMG_8819.jpg"/>
        </figure>
        <figure className="card">
        <img alt="" src="https://ik.imagekit.io/v64tipjbn/SarahPortfolio/Egypt/IMG_7830.JPG"/>
        </figure>
        <figure className="card">
        <img alt="" src="https://ik.imagekit.io/v64tipjbn/SarahPortfolio/Egypt/IMG_7792.JPG"/>
        </figure>
        </div>
        {/* NEXT LAYOUT */}

        <div className='setTwo'>
        <figure className="card">
        <img alt="" src="https://ik.imagekit.io/v64tipjbn/SarahPortfolio/Costa%20Rica/IMG_6979.jpg"/>
        </figure>
        <figure className="card">
        <img alt="" src="https://ik.imagekit.io/v64tipjbn/SarahPortfolio/Costa%20Rica/IMG_6776%203.jpg"/>
        </figure>
        <figure className="card">
        <img alt="" src="https://ik.imagekit.io/v64tipjbn/SarahPortfolio/Costa%20Rica/IMG_2130.HEIC"/>
        </figure>
        </div>

        {/* NEXT LAYOUT */}
        {/* <h3 className='photoHead'>Spain</h3> */}
        <div className='setThree'>
        <figure className="card">
        <img alt="" src="https://ik.imagekit.io/v64tipjbn/SarahPortfolio/Spain/IMG_5040.JPG?updatedAt=1696791324903"/>
        </figure>
        <figure className="card">
        <img alt="" src="https://ik.imagekit.io/v64tipjbn/SarahPortfolio/Spain/IMG_7370.JPG?updatedAt=1696791018048"/>
        </figure>
        <figure className="card">
        <img alt="" src="https://ik.imagekit.io/v64tipjbn/SarahPortfolio/Spain/198690B3-F23B-46B8-8B13-61B2C32FDD6C.JPG?updatedAt=1696790710343"/>
        </figure>
        </div>

        {/* NEXT LAYOUT */}

        {/* <h3 className='photoHead'>Portugal</h3> */}
        <div className='setFour'>
        <figure className="card">
        <img alt="" src="https://ik.imagekit.io/v64tipjbn/SarahPortfolio/Portugal/IMG_5175.JPG?updatedAt=1696792082419"/>
        </figure>
        <figure className="card">
        <img alt="" src="https://ik.imagekit.io/v64tipjbn/SarahPortfolio/Portugal/IMG_5280.JPG?updatedAt=1696792055140"/>
        </figure>
        <figure className="card">
        <img alt="" src="https://ik.imagekit.io/v64tipjbn/SarahPortfolio/Portugal/IMG_5323.JPG?updatedAt=1696792018863"/>
        </figure>
        </div>
    </div>
  );
};

export default Travel;
 
