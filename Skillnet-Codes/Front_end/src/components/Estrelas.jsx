import React from 'react'
import './Estrelas.css'
import { useState } from 'react';

function Estrelas({onChange}) {
      const [rating, setRating] = useState(0);

  const handleClick = (event, index) => {
    const { left, width } = event.target.getBoundingClientRect();
    const clickX = event.clientX - left;
    const value = clickX < width / 2 ? index + 0.5 : index + 1;

    setRating(value);
    if (onChange) onChange(value);
  };
  return (
       <div className="star-rating">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="star-wrapper"
          onClick={(e) => handleClick(e, i)}
        >
          <div
            className="star"
            style={{
              width:
                rating >= i + 1
                  ? '100%'
                  : rating >= i + 0.5
                  ? '50%'
                  : '0%',
            }}
          >
            <img src="" alt="" />
          </div>
          <div className="star-empty"></div>
        </div>
      ))}
    </div>
  )
}

export default Estrelas