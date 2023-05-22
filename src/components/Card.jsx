import React from 'react'

const Card = ({image, title, description, ratings, starIcons}) => {
  return (
    <div className='card'> 
      <img src={image} alt="product image" />
      <div className='description'>
    <h1>{title}</h1>
    <h2> KSH 1,599 <span>Ksh 2,500</span> <strong>-36%</strong></h2>
    <small>Few Units Left</small>
    <p id="ratings"><span>{starIcons}</span>({ratings} ratings)</p>
    <h2>Description</h2>
      <p>{description}</p>
    </div>
    </div>
  );
}

export default Card
