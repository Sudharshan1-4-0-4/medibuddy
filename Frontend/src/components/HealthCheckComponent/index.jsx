import React, { useState, useEffect } from 'react';
import './healthcheck.css';

const HealthCheckComponent = () => {
  const [data, setData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('popular'); 

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config');
        const result = await response.json();
        setData(result[0].page_config[2]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>; 

  const categoryId = '10386'; 

  
  const handleCategoryClick = (category) => {
    setSelectedCategory(category.toLowerCase()); 
  };

  return (
    <div className="health-check-container">
      <h1>{data.heading}</h1>

    
      <div className="categories-container">
        {data.categories[categoryId]?.map((category, index) => (
          <div
            key={index}
            className={`category-item ${selectedCategory === category.toLowerCase() ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </div>
        ))}
      </div>

     
      <div className="category-section">
        <h2>Selected Category: {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</h2>

        
        <div className="packages-container">
          {data.props.map((prop, index) =>
            prop.packages.map((packageItem, idx) => {
             
              if (packageItem.subCategories.some(subCat => subCat.toLowerCase() === selectedCategory)) {
                return (
                  <div key={idx} className="package-card">
                    <img
                      src={`https://via.placeholder.com/150`}
                      alt={packageItem.packageDisplayName}
                      className="package-image"
                    />
                    <div className="package-details">
                      <h3>{packageItem.packageDisplayName}</h3>
                      <p>{packageItem.description || 'No description available'}</p>
                      <p><strong>Discount:</strong> {packageItem.discount}%</p>
                    </div>
                  </div>
                );
              }
              return null;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default HealthCheckComponent;
