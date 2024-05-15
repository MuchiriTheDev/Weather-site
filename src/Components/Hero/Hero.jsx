import React from 'react';
import hotImage from './hot.png'; // Assuming this is the correct image
import './Hero.css';

const Hero = (props) => {
  return (
    <div id="hero">  
      <img
        src={props.image} 
        className="weather-image"
      />
      <h1 className="temp">{props.temp}&deg;c</h1>
      <h2 className="location">{props.location}</h2>
    </div>
  );
};

Hero.defaultProps = {
  image: hotImage, 
};

export default Hero;
