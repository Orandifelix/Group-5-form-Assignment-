import React from 'react'
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <div className='card'> 
      <img src={props.image} alt="product image" />
      <div className='description'>
    <h1>{props.title}</h1>
    <h2>Description</h2>
      <p>{props.description}</p>
    </div>
    </div>
  );
}
Card.defaultProps ={description: `The Simon Carter Green Shirt is a stylish and versatile wardrobe staple
that effortlessly combines classic design with contemporary flair. Made
with high-quality materials and meticulous craftsmanship, this shirt
exudes sophistication and refinement.`,
title:`Simon Carter Green Shirt`,
image:`https://imagescdn.simoncarter.in/img/app/product/4/404834-2469768.jpg?auto=format`}
Card.propTypes={title:PropTypes.string.isRequired, description:PropTypes.string.isRequired, image:PropTypes.string.isRequired}

export default Card
