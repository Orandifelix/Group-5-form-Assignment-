import React from 'react'
const Form = () => {
  return (
    <form id="form">
      <h2>Review This Product</h2>
      <label htmlFor="email">Name</label>
      <input type="text" id="name" placeholder='Enter Your Name' required />
      <br />
      <br />
      <label htmlFor="review">Review</label>
      <textarea type="review" id="review" placeholder='Type your review here' required />
      <br />
      <br />
      <button type="submit" className="btn">
        Submit
      </button>

    </form>
  );
}

export default Form