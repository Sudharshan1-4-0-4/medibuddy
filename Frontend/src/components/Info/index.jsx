import React from 'react';
import './info.css';

import one1 from '../../assets/one1.png';
import two2 from '../../assets/two2.png';
import three3 from '../../assets/three3.png';
import four4 from '../../assets/four4.png';


const Info = () => {
  const data = [
    {
      id: 1,
      image: one1, 
      description: 'Gov. Approved Diagnostic Centres',
    },
    {
      id: 2,
      image: two2,  
      description: 'Daily Temperature Check of all Technicians',
    },
    {
      id: 3,
      image: three3, 
      description: 'Mandatory use of Mask & Sanitizers',
    },
    {
      id: 4,
      image: four4, 
      description: 'Regular Disinfectation of Labs',
    },
  ];

  return (
    <div className="info-container">
      <h2 className="info-title">100% Safe & Secure Lab Tests</h2>
      <div className="info-cards">
        {data.map((item) => (
          <div className="info-card" key={item.id}>
            <img src={item.image} alt={`info-card-${item.id}`} className="info-image" />
            <p className="info-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
