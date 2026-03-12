// src/components/GameDetail.js

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

import { database } from '../firebase';
import { ref, onValue } from 'firebase/database';

import nyslData from '../data/nyslData';
import GameMessages from './GameMessages';
import { useUserState } from '../firebase';

const GameDetail = () => {

  const { id } = useParams();
  const { games, locations } = nyslData;

  const game = games[id] || null;
  const location = locations[game?.locationKey];

  const { user, loading } = useUserState();

  const [photos, setPhotos] = useState([]);

  // 🆕 estado para imagen ampliada
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // 🔥 cargar fotos desde Firebase
  useEffect(() => {

    const messagesRef = ref(database, `games/${id}/messages`);

    const unsubscribe = onValue(messagesRef, (snapshot) => {

      const data = snapshot.val();

      if (!data) {
        setPhotos([]);
        return;
      }

      const messages = Object.values(data);

      const images = messages
        .filter(msg => msg.text && msg.text.startsWith("http"))
        .map(msg => msg.text);

      setPhotos(images);

    });

    return () => unsubscribe();

  }, [id]);

  // abrir imagen
  const openImage = (photo) => {

    setSelectedPhoto(photo);
    setShowModal(true);

  };

  // cerrar imagen
  const closeImage = () => {

    setShowModal(false);
    setSelectedPhoto(null);

  };

  if (!game) {
    return (
      <Container className="text-center mt-5">
        <h2>Game not found</h2>

        <Button
          as={Link}
          to="/games"
          variant="primary"
        >
          Back to Schedule
        </Button>

      </Container>
    );
  }

  return (

    <Container>

      <Row className="justify-content-center mb-4">
        <Col md={8} className="text-center">
          <h1 className="display-4 text-primary mb-3">
            Game Details
          </h1>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8}>

          <Card className="shadow-lg border-0">

            <Card.Header className="bg-primary text-white text-center py-3">
              <h3 className="mb-0">
                {game.team1} vs {game.team2}
              </h3>
            </Card.Header>

            <Card.Body className="p-4">

              <Row className="mb-4">

                <Col sm={6}>
                  <h5 className="text-primary">Date</h5>
                  <p className="h4">
                    {game.date} {game.month}
                  </p>
                </Col>

                <Col sm={6}>
                  <h5 className="text-primary">Time</h5>
                  <p className="h4">
                    {game.time}
                  </p>
                </Col>

              </Row>

              <hr />

              <Row className="mb-4">

                <Col>
                  <h5 className="text-primary">Location</h5>

                  <p className="h5">
                    {location?.name || 'TBD'}
                  </p>

                  <p className="text-muted">
                    {location?.address || ''}
                  </p>
                </Col>

              </Row>

              {location?.mapUrl && (

                <Row className="mb-4">

                  <Col>

                    <h5 className="text-primary mb-3">
                      Map
                    </h5>

                    <div className="ratio ratio-16x9">

                      <iframe
                        src={location.mapUrl}
                        title={location.name}
                        allowFullScreen
                        loading="lazy"
                        style={{
                          border: 0,
                          borderRadius: '8px'
                        }}
                      />

                    </div>

                  </Col>

                </Row>

              )}

              <hr />

              {/* Chat */}

              <Row className="mb-4">

                <Col>

                  <h5 className="text-primary mb-3">
                    💬 Game Chat
                  </h5>

                  {loading ? (

                    <p>Cargando usuario...</p>

                  ) : user ? (

                    <GameMessages gameId={id} user={user} />

                  ) : (

                    <p className="text-danger">
                      Debes iniciar sesión para ver o enviar mensajes.
                    </p>

                  )}

                </Col>

              </Row>

              {/* 📷 Galería */}

              <Row className="mb-4">

                <Col>

                  <h5 className="text-primary mb-3">
                    📷 Galería del Partido
                  </h5>

                  {photos.length === 0 ? (

                    <p className="text-muted">
                      Aún no hay fotos.
                    </p>

                  ) : (

                    <Row>

                      {photos.map((photo, index) => (

                        <Col
                          md={4}
                          className="mb-3"
                          key={index}
                        >

                          <img
                            src={photo}
                            alt="foto del partido"
                            onClick={()=>openImage(photo)}
                            style={{
                              width: "100%",
                              borderRadius: "10px",
                              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                              cursor: "pointer"
                            }}
                          />

                        </Col>

                      ))}

                    </Row>

                  )}

                </Col>

              </Row>

              {/* Botón fotos */}

              <Row className="mb-4">

                <Col className="text-center">

                  <Link
                    to={`/fotos/${id}`}
                    className="btn btn-info"
                  >
                    📷 Ver / Subir Fotos del Partido
                  </Link>

                </Col>

              </Row>

              <hr />

              <Row>

                <Col className="d-flex justify-content-between">

                  <Button
                    as={Link}
                    to="/games"
                    variant="outline-primary"
                  >
                    ← Back to Schedule
                  </Button>

                  <Button
                    as={Link}
                    to="/"
                    variant="outline-secondary"
                  >
                    Home
                  </Button>

                </Col>

              </Row>

            </Card.Body>

          </Card>

        </Col>
      </Row>

      {/* 🖼️ Modal imagen ampliada */}

      <Modal
        show={showModal}
        onHide={closeImage}
        centered
        size="lg"
      >

        <Modal.Body
          style={{
            textAlign: "center"
          }}
        >

          {selectedPhoto && (

            <img
              src={selectedPhoto}
              alt="foto ampliada"
              style={{
                width: "100%",
                borderRadius: "10px"
              }}
            />

          )}

        </Modal.Body>

      </Modal>

    </Container>

  );

};

export default GameDetail;