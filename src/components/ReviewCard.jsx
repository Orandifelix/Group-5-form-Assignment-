import React from 'react'

const ReviewCard = ({name, review, userProfile}) => {
  return (
    <div className="reviews">
    <h3><span>{userProfile}</span> {name}</h3>
    <p>{review}</p>
  </div>
  )
}

export default ReviewCard