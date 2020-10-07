import React, { useState } from 'react';
import {Row, Col, FormControl, Button } from 'react-bootstrap';

const CitySelector = ({ onSelectButtonClick }) => {
  const [city, setCity] = useState(null);

  return (
    <>
      <Row>
        <Col>
          <h1>Seleziona una città!</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <FormControl
            placeholder="Città.."
            onChange={e => setCity(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={() => onSelectButtonClick(city)}>Cerca</Button>
        </Col>
      </Row>
    </>
  )
};

export default CitySelector;
