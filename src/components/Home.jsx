import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import nyslData from '../data/nyslData';

const Home = () => {

  const events = nyslData?.events || [];

  return (
    <Container>

      <Row className="justify-content-center mb-4">
        <Col md={8} className="text-center">
          <h1 className="display-4 text-primary mb-3">
            Northside Youth Soccer League
          </h1>

          <h2 className="text-secondary mb-4">
            Upcoming Events
          </h2>
        </Col>
      </Row>
      
      <Row className="justify-content-center">
        <Col md={8}>

          <Card className="shadow-sm mb-4">
            <Card.Body>

              {events.length > 0 ? (
                events.map((event, index) => (
                  <Row key={index} className="mb-3 pb-2 border-bottom">

                    <Col sm={4} className="fw-bold text-primary">
                      {event.date}
                    </Col>

                    <Col sm={8}>
                      {event.description}
                    </Col>

                  </Row>
                ))
              ) : (
                <p className="text-center">
                  No events scheduled at this time.
                </p>
              )}

            </Card.Body>
          </Card>
          
          <div className="text-center mt-4">

            <Button
              as={Link}
              to="/games"
              variant="primary"
              size="lg"
              className="me-3"
            >
              View Full Schedule
            </Button>

            <Button
              as={Link}
              to="/register"
              variant="success"
              size="lg"
            >
              Register Now
            </Button>

          </div>

        </Col>
      </Row>

    </Container>
  );
};

export default Home;