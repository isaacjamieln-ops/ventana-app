import React, { useState } from 'react';
import { Container, Row, Col, Table, Card, Alert, Button, Modal } from 'react-bootstrap';
import nyslData from '../data/nyslData';

const GameInfo = () => {
  const { games, locations } = nyslData;
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showMap, setShowMap] = useState(false);

  const gamesByMonth = Object.values(games).reduce((acc, game) => {
    if (!acc[game.month]) acc[game.month] = [];
    acc[game.month].push(game);
    return acc;
  }, {});

  const handleLocationClick = (locationKey) => {
    setSelectedLocation(locationKey);
    setShowMap(true);
  };

  return (
    <Container>
      <Row className="justify-content-center mb-4">
        <Col md={10} className="text-center">
          <h1 className="display-4 text-primary mb-3">NYSL Game Information</h1>
          <Alert variant="info">* All games take place on Saturday</Alert>
        </Col>
      </Row>

      {Object.entries(gamesByMonth).map(([month, monthGames]) => (
        <Row key={month} className="justify-content-center mb-5">
          <Col md={10}>
            <h3 className="text-primary mb-3">{month}</h3>
            <Table striped bordered hover responsive className="shadow-sm">
              <thead className="bg-primary text-white">
                <tr><th>Date</th><th>Teams</th><th>Location</th><th>Times</th></tr>
              </thead>
              <tbody>
                {monthGames.map((game, idx) => (
                  <tr key={idx}>
                    <td className="fw-bold">{game.date}</td>
                    <td>{game.team1} and {game.team2}</td>
                    <td>
                      <Button variant="link" className="p-0 text-decoration-none"
                        onClick={() => handleLocationClick(game.locationKey)}>
                        {locations[game.locationKey]?.name}
                      </Button>
                    </td>
                    <td>{game.time}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      ))}

      <Row className="justify-content-center mt-4">
        <Col md={10}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="text-primary h3">Additional Information</Card.Title>
              <Row>
                <Col md={6}><p><strong>Facility Type:</strong> Outdoor</p></Col>
                <Col md={6}><p><strong>Additional Information:</strong> If deemed necessary by NYSL, games may be shortened or cancelled due to extreme weather conditions.</p></Col>
              </Row>
              <hr />
              <p><strong>Please direct all questions to:</strong> Michael Randall, League Coordinator</p>
              <p><strong>Phone:</strong> (630) 690-8132</p>
              <p><strong>Email:</strong> <a href="mailto:michael.randall@chisoccer.org">michael.randall@chisoccer.org</a></p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showMap} onHide={() => setShowMap(false)} size="lg">
        <Modal.Header closeButton><Modal.Title>Location Map</Modal.Title></Modal.Header>
        <Modal.Body>
          {selectedLocation && locations[selectedLocation]?.mapUrl && (
            <iframe src={locations[selectedLocation].mapUrl} width="100%" height="450" 
              style={{ border: 0 }} allowFullScreen loading="lazy" 
              title={locations[selectedLocation].name} />
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default GameInfo;