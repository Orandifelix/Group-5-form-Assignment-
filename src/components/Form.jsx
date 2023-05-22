import React, {useState} from 'react'
const Form = ({handleForm}) => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleForm({ name, review });
    setName('');
    setReview('');
  };
  return (
    <form id="form" onSubmit={handleSubmit}>
      <h2>Review This Product</h2>
      <label htmlFor="email">Name</label>
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