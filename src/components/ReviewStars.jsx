import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
export const starIcons = [
    <FaStar key="star1" />,
    <FaStar key="star2" />,
    <FaStar key="star3" />,
    <FaStarHalfAlt key="halfStar" />,
    <FaRegStar key="emptyStar" />,
  ];
  

const ReviewStars = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starIcon =
        i <= rating ? (
          <FaStar key={i} onClick={() => handleStarClick(i)} />
        ) : i - 0.5 === rating ? (
          <FaStarHalfAlt key={i} onClick={() => handleStarClick(i)} />
        ) : (
          <FaRegStar key={i} onClick={() => handleStarClick(i)} />
        );

      stars.push(starIcon);
    }
    return stars;
  };

  return <div style={{color:"goldenrod"}}>{renderStars()}</div>;
};

export default ReviewStars;
