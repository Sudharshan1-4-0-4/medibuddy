
import React, { useEffect, useState } from 'react';
import './searchsection.css';
import { FaSearch } from 'react-icons/fa';

const SearchSection = () => {
  const [icons, setIcons] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config');
        const data = await response.json();
       
       
        const fetchedIcons = data[0].page_config[0].props.map((item) => ({
          iconText: item.iconText,
          iconUrl: item.iconUrl,
        }));
        setIcons(fetchedIcons);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="search-section">

      <div className="search-bar">
        <input
          type="text"
          placeholder="Find lab tests, diagnostics centres"
          className="search-input"
        />
        <FaSearch className="search-icon" />
      </div>


      <div className="cards-container">
        {icons.map((icon, index) => (
          <div key={index} className="card">
            <img src={icon.iconUrl} alt={icon.iconText} className="card-image" />
            <p className="card-description">{icon.iconText}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SearchSection;
