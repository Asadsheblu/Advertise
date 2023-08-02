import React from 'react';
import { TypeAnimation } from 'react-type-animation';
const Banner = () => {
    return (
   <div className='banner'>
      <div className='p-5 container'>
      <h1 className='headline'>I'M JOHN DOE</h1>
      <h4 className='text-shadow'> 
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'WEB DEVELOPER',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'GRAPHICS DESIGNER',
        1000,
        'DIGITAL MARKETER',
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '40', display: 'inline-block' }}
      repeat={Infinity}
    />
      </h4>
      <button className='btn btn-success'>HIRE ME</button>
      </div>
      </div>
     
    );
};

export default Banner;