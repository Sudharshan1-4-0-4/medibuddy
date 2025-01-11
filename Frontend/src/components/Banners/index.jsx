import React, { useState, useEffect } from 'react';
import './banners.css';

const Banners = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch('https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config');
        const data = await response.json();
        console.log("second");

        console.log(data);
        console.log(data[0].page_config[1]);
        setBanners(data[0].page_config[1].props); 
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };

    fetchBanners();
  }, []);

  return (
    <div className="banner-container">
      <div className="banner-images">
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner.bannerUrl} 
            alt={`Banner ${index}`}
            className="banner-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Banners;
