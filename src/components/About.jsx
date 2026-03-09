import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import nyslData from '../data/nyslData';

const About = () => {
  const { about } = nyslData;

  return (
    <Container>
      <Row className="justify-content-center mb-4">
        <Col md={8} className="text-center">
          <h1 className="display-4 text-primary mb-3">About NYSL</h1>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title className="text-primary h3 mb-3">Mission</Card.Title>
              <Card.Text>{about.mission}</Card.Text>
            </Card.Body>
          </Card>

          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title className="text-primary h3 mb-3">Vision</Card.Title>
              <Card.Text>{about.vision}</Card.Text>
            </Card.Body>
          </Card>

          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="text-primary h3 mb-3">General Information</Card.Title>
              <Card.Text>{about.generalInfo}</Card.Text>
              
              <Row className="mt-4">
                <Col sm={6}>
                  <h6 className="fw-bold">Founded:</h6>
                  <p>{about.founded}</p>
                </Col>
                <Col sm={6}>
                  <h6 className="fw-bold">Age Range:</h6>
                  <p>{about.ages}</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;