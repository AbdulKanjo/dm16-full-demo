import React from 'react';

import Button from '../Button/Button';

const cardStyles = {
  height: '350px',
  width: '250px',
  border: '1px solid black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
};

const Card = ({ product, text, handleCardButtonClick }) => {
  return (
    <div style={cardStyles}>
      <h1>{product.type}</h1>
      <p>{product.price}</p>
      <Button data={product} clickHandler={handleCardButtonClick}>
        {text}
      </Button>
    </div>
  );
};

export default Card;
