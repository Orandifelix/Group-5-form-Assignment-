import React, {useState} from 'react'
import ReviewStars from './ReviewStars';
const Form = ({handleForm}) => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0)

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };
  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleForm({ name, review, rating});
    setName('');
    setReview('');
    setRating(0);
  };
  return (
    <form id="form" onSubmit={handleSubmit}>
      <h2>Review This Product</h2>
      <label htmlFor="email">Name</label>
      <ReviewStars onChange={handleRatingChange}/>
      <input type="text" id="name" placeholder='Enter Your Name' required value={name} onChange={handleNameChange}/>
      <br />
      <br />
      <label htmlFor="review">Review</label>
      <textarea type="review" id="review" placeholder='Type your review here' required value={review} onChange={handleReviewChange}/>
      <br/>
      <button type="submit" className="btn">
        Submit
      </button>

    </form>
  );
}

export default Form