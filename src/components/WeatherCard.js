import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';

const WeatherCard = ({ dt, min, max, main, icon }) => {
  const date = new Date(dt);

  return (
    <CardColumns>
      <Card border="secondary" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '20px', width: '12rem' }}>
        <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
        <Card.Body>
          <Card.Title>{main}</Card.Title>
          <p>{date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}</p>
          <p>Min: {min}°c</p>
          <p>Max: {max}°c</p>
        </Card.Body>
      </Card>
    </CardColumns>
  )
};

export default WeatherCard;
