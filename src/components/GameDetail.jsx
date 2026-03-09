import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import nyslData from '../data/nyslData';

const GameDetail = () => {
  const { id } = useParams(); // Obtiene el parámetro de la URL
  const { games, locations } = nyslData;

  // Buscar el juego por ID
  const game = games[id];

  if (!game) {
    return (
      <Container className="text-center mt-5">
        <h2>Game not found</h2>
        <Button as={Link} to="/games" variant="primary">
          Back to Schedule
        </Button>
      </Container>
    );
  }

  const location = locations[game.locationKey];

  return (
    <Container>
      <Row className="justify-content-center mb-4">
        <Col md={8} className="text-center">
          <h1 className="display-4 text-primary mb-3">Game Details</h1>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg border-0">
            <Card.Header className="bg-primary text-white text-center py-3">
              <h3 className="mb-0">{game.team1} vs {game.team2}</h3>
            </Card.Header>
            <Card.Body className="p-4">
              <Row className="mb-4">
                <Col sm={6}>
                  <h5 className="text-primary">Date</h5>
                  <p className="h4">{game.date} {game.month}</p>
                </Col>
                <Col sm={6}>
                  <h5 className="text-primary">Time</h5>
                  <p className="h4">{game.time}</p>
                </Col>
              </Row>

              <hr />

              <Row className="mb-4">
                <Col>
                  <h5 className="text-primary">Location</h5>
                  <p className="h5">{location?.name}</p>
                  <p className="text-muted">{location?.address}</p>
                </Col>
              </Row>

              {location?.mapUrl && (
                <Row className="mb-4">
                  <Col>
                    <h5 className="text-primary mb-3">Map</h5>
                    <div className="ratio ratio-16x9">
                      <iframe
                        src={location.mapUrl}
                        title={location.name}
                        allowFullScreen
                        loading="lazy"
                        style={{ border: 0, borderRadius: '8px' }}
                      />
                    </div>
                  </Col>
                </Row>
              )}

              <hr />

              <Row>
                <Col className="d-flex justify-content-between">
                  <Button as={Link} to="/games" variant="outline-primary">
                    ← Back to Schedule
                  </Button>
                  <Button as={Link} to="/" variant="outline-secondary">
                    Home
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default GameDetail;