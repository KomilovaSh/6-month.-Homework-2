import React from 'react';
import './index.css';

function Card({ cars }) {
  return (
    <div>
      {cars.map((car, index) => (
        <div className='card-wrapper' key={index}>
          <div className='card'>
            <img src={car.image} alt={car.title} />
            <h4>Name: {car.title}</h4>
            <h4>Type: {car.start_production}</h4>
            <h4>Year: {car.class}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
