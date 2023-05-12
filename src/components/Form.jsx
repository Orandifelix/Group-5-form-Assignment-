import React from 'react'



const Form = () => {
  return (
    <form id="form">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" placeholder='Enter Email' required />
      <br />
      <br />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" placeholder='********' required />
      <br />
      <br />
      <button type="submit" className="btn">
        Submit
      </button>

    </form>
  );
}

export default Form