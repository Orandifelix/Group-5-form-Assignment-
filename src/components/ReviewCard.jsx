import React from 'react'

const ReviewCard = ({name, review}) => {
  return (
    <div className="reviews">
    <h4>{name}</h4>
    <p>{review}</p>
  </div>
  )
}

export default ReviewCard