import React, { useState, useEffect } from 'react';
import './userreviews.css';

const UserReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config'); 
        const result = await response.json();
        setReviews(result[0].page_config[5].props);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="reviews-container">
      <h2>What Our Users Say</h2>
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-header">
              <div className="rating">
                {Array.from({ length: review.rating }, (_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="review-date">{review.days}</p>
            </div>
            <p className="review-content">"{review.content}"</p>
            <p className="review-name">- {review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserReviews;