import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Rules = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-4 mb-4">
        <Col md={10} className="text-center">
          <h1 className="display-4 text-primary">NYSL Rules and Policies</h1>
          <p className="mt-3">Northside Youth Soccer League strives to provide a safe, fun, and fair environment for all players.</p>
        </Col>
      </Row>

      <Row className="justify-content-center mb-4">
        <Col md={10}>
          <Card className="shadow-sm p-3">
            <h3 className="text-primary mb-3">General Rules</h3>
            <ul>
              <li>All players must wear proper equipment during games.</li>
              <li>Games are played on Saturdays according to the published schedule.</li>
              <li>Coaches and referees have the final authority on game decisions.</li>
              <li>Sportsmanship is expected at all times from players, coaches, and spectators.</li>
            </ul>

            <h3 className="text-primary mt-4 mb-3">Policies</h3>
            <ul>
              <li>If games are cancelled due to weather, updates will be posted on the website.</li>
              <li>Players must register before the season starts to be eligible to play.</li>
              <li>Parents should contact the League Coordinator for any questions or concerns.</li>
            </ul>

            <Row className="mt-4">
              <Col className="d-flex justify-content-between">
                <Button as={Link} to="/" variant="outline-secondary">
                  Home
                </Button>
                <Button as={Link} to="/games" variant="outline-primary">
                  Game Schedule
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Rules;