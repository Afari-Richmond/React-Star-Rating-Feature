import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './style.css';

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(index) {
    console.log(index);
    setRating(index);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  function handleMouseEnter(index) {
    setHover(index);
  }

  return (
  <>
    <div className="star-rating">
      {
        [...Array(noOfStars)].map((_, index) => {
          const currentIndex = index + 1;
          return (
            <FaStar 
              key={currentIndex}
              className={currentIndex <= (hover || rating) ? 'active' : 'inactive'}
              onClick={() => handleClick(currentIndex)}
              onMouseEnter={() => handleMouseEnter(currentIndex)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })
      }


      
    </div>

    
  
  
  </>
    
  );
}

export default StarRating;
