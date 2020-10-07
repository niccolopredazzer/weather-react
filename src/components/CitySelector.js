import React, { useState } from 'react';
import {Row, Col, FormControl, Button } from 'react-bootstrap';

const CitySelector = ({ onSelectButtonClick }) => {
  const [city, setCity] = useState(null);

  const handleKeypress = e => {

  if (e.keyCode === 13) {
    CitySelector();
  }
};

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
            onKeyPress={handleKeypress}
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
