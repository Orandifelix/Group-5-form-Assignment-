import React from 'react'

const ReviewCard = ({name, review, userProfile, Stars}) => {
  return (
    <div className="reviews">
    <h3><span>{userProfile}</span> {name}</h3>
    <p id="stars">{Stars}</p>
    <p>{review}</p>
  </div>
  )
}

export default ReviewCard