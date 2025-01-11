import React, { useState, useEffect } from 'react';
import './lifestyle.css';

import diabetic from '../../assets/diabetic.png';
import obesity from '../../assets/obesity.png';
import hypertension from '../../assets/hypertension.png';
import smoking from '../../assets/smoking.png';


const LifeStyleComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
      
        const response = await fetch('https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config');
        const result = await response.json();
        setData(result[0].page_config[3]); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>; 

  return (
    <div className="lifestyle-container">
      <h1>{data.title}</h1>

    
      <div className="lifestyle-cards">
        {data.props.map((lifestyle, index) => (
          <div key={index} className="lifestyle-card">
            <img
              src={obesity}
              alt={lifestyle.title}
              className="lifestyle-image"
            />
            <h3>{lifestyle.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifeStyleComponent;
