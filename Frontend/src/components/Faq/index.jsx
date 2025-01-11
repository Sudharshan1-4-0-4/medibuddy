import React, { useState, useEffect } from 'react';

import './faq.css';

const Faq = () => {
  const [faqData, setFaqData] = useState(null);
  const [expandedQuestion, setExpandedQuestion] = useState(null); 

 
  useEffect(() => {
    const fetchFAQData = async () => {
      try {
        const response = await fetch('https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config'); 
        const data = await response.json();
        setFaqData(data[0].page_config[6]); 
      } catch (error) {
        console.error('Error fetching FAQ data:', error);
      }
    };

    fetchFAQData();
  }, []); 

  const handleToggle = (id) => {
    if (expandedQuestion === id) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(id);
    }
  };


  if (!faqData) return <div>Loading...</div>;

  return (
    <div className="faq-container">
      <h1>{faqData.title}</h1>

      {faqData.props.map((faq) => (
        <div
          key={faq.id}
          className="faq-item"
          style={{ border: '1px solid #ddd', margin: '10px 0', borderRadius: '5px' }}
        >
          <div
            className="faq-question"
            onClick={() => handleToggle(faq.id)}
            style={{
              cursor: 'pointer',
              padding: '10px',
              backgroundColor: '#f1f1f1',
              fontWeight: 'bold',
            }}
          >
            <img
              src={faq.icon}
              alt="FAQ icon"
              style={{ width: '20px', marginRight: '10px' }}
            />
            {faq.question}
          </div>

          {expandedQuestion === faq.id && (
            <div className="faq-answer" style={{ padding: '10px', backgroundColor: '#fff' }}>
              {faq.answer && <p>{faq.answer}</p>}
              {faq.points && (
                <ul>
                  {faq.points.map((point, idx) => (
                    <li key={idx}>
                      <img
                        src={point.img || ''}
                        alt="point icon"
                        style={{ width: '20px', marginRight: '8px' }}
                      />
                      {point.pnt}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
