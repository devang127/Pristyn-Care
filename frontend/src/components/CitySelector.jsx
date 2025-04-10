import React from 'react';
import { Offcanvas, Form, Row, Col, Card } from 'react-bootstrap';

const popularCities = [
  'Bangalore', 'Chennai', 'Delhi',
  'Gurgaon', 'Hyderabad', 'Kolkata',
  'Lucknow', 'Mumbai', 'Pune'
];

const otherCities = [
  'Agra', 'Ahmedabad', 'Bangalore', 'Bhopal', 'Bhubaneswar',
  'Chandigarh', 'Chennai', 'Coimbatore', 'Dehradun'
];

const CitySelector = ({ show, onHide }) => {
  return (
    <Offcanvas show={show} onHide={onHide} placement="end" className="w-100" style={{ maxWidth: '425px' }}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="fw-bold">Select Your City</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form.Control
          type="text"
          placeholder="Search by city"
          className="mb-4 rounded"
        />

        <h6 className="fw-bold mb-3">Popular Cities</h6>
        <Row className="g-3 mb-4">
          {popularCities.map((city, idx) => (
            <Col xs={4} key={idx}>
              <Card className="text-center p-2 shadow-sm border-0 rounded">
                <Card.Img variant="top" src={`https://dummyimage.com/60x60/cccccc/000000&text=${city[0]}`} className="mx-auto mb-2" style={{ width: 60, height: 60, objectFit: 'contain' }} />
                <small>{city}</small>
              </Card>
            </Col>
          ))}
        </Row>

        <h6 className="fw-bold mb-2">Other Cities</h6>
        <div className="list-group">
          {otherCities.map((city, idx) => (
            <div className="list-group-item border-0 border-bottom py-2 px-0" key={idx}>
              {city}
            </div>
          ))}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CitySelector;
