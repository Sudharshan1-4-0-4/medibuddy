import React from 'react';
import './howitworks.css';

import one from '../../assets/one.png';
import two from '../../assets/two.png';
import three from '../../assets/three.png';

const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <h1>How It Works</h1>

      <div className="how-it-works-content">
     
        <div className="how-it-works-item">
          <img
            src={one}
            alt="Step 1"
            className="how-it-works-image"
          />
          <div className="how-it-works-description">
          
            <p>Search for required Lab tests and select Diagnostic centre of your choice. Add prescription, patient details and address to complete the booking.</p>
          </div>
        </div>

       
        <div className="how-it-works-item">
          <img
            src={two}
            alt="Step 2"
            className="how-it-works-image"
          />
          <div className="how-it-works-description">
           
            <p>Visit the lab centre as per your booking. For home sample collection, certified professional will collect the samples at your home.</p>
          </div>
        </div>

     
        <div className="how-it-works-item">
          <img
            src={three}
            alt="Step 3"
            className="how-it-works-image"
          />
          <div className="how-it-works-description">
            
            <p>We will email you the reports. You can also access your reports within your account on the MediBuddy App.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
