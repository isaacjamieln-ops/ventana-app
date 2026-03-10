import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useUserState } from '../firebase'; // Importar el hook de autenticación
import nyslData from '../data/nyslData';

const Home = () => {
  const { user } = useUserState(); // Obtener el estado del usuario
  const events = nyslData?.events || [];

  return (
    <Container>
      {/* SECCIÓN ORIGINAL - TODO SE MANTIENE IGUAL */}
      <Row className="justify-content-center mb-4">
        <Col md={8} className="text-center">
          <h1 className="display-4 text-primary mb-3">Northside Youth Soccer League</h1>
          <h2 className="text-secondary mb-4">Upcoming Events</h2>
        </Col>
      </Row>
      
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              {events.length > 0 ? (
                events.map((event, index) => (
                  <Row key={index} className="mb-3 pb-2 border-bottom">
                    <Col sm={4} className="fw-bold text-primary">{event.date}</Col>
                    <Col sm={8}>{event.description}</Col>
                  </Row>
                ))
              ) : (
                <p className="text-center">No events scheduled at this time.</p>
              )}
            </Card.Body>
          </Card>
          
          <div className="text-center mt-4">
            <Button as={Link} to="/games" variant="primary" size="lg" className="me-3">
              View Full Schedule
            </Button>
            <Button as={Link} to="/register" variant="success" size="lg">
              Register Now
            </Button>
          </div>
        </Col>
      </Row>

      {/* NUEVA SECCIÓN: FORO DE LA COMUNIDAD - SOLO PARA USUARIOS LOGEADOS */}
      {user && (
        <>
          <Row className="justify-content-center mt-5 pt-4 border-top">
            <Col md={8} className="text-center">
              <h2 className="text-primary mb-4">Foro de la Comunidad</h2>
              <p className="lead text-muted mb-4">
                Conéctate con otros padres, comparte experiencias y organiza actividades
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col md={8}>
              {/* Anuncios importantes */}
              <Card className="shadow-sm mb-3">
                <Card.Header className="bg-info text-white">
                  <h5 className="mb-0">📢 Anuncios importantes</h5>
                </Card.Header>
                <Card.Body>
                  <p className="text-muted">Información oficial de la liga, cambios de horarios, suspensiones y noticias relevantes.</p>
                  <Button 
                    as={Link} 
                    to="/foro/anuncios" 
                    variant="outline-info" 
                    size="sm"
                  >
                    Ver anuncios →
                  </Button>
                </Card.Body>
              </Card>

              {/* Conversaciones generales */}
              <Card className="shadow-sm mb-3">
                <Card.Header className="bg-success text-white">
                  <h5 className="mb-0">💬 Conversaciones</h5>
                </Card.Header>
                <Card.Body>
                  <p className="text-muted">Charla general entre padres, experiencias de partidos, consultas y consejos.</p>
                  <Button 
                    as={Link} 
                    to="/foro/conversaciones" 
                    variant="outline-success" 
                    size="sm"
                  >
                    Ver conversaciones →
                  </Button>
                </Card.Body>
              </Card>

              {/* Tienda/Compra-Venta */}
              <Card className="shadow-sm mb-3">
                <Card.Header className="bg-warning">
                  <h5 className="mb-0">🔄 Tienda - Compra/Venta</h5>
                </Card.Header>
                <Card.Body>
                  <p className="text-muted">Compra y venta de equipamiento, camisetas, botines y artículos de fútbol.</p>
                  <Button 
                    as={Link} 
                    to="/foro/tienda" 
                    variant="outline-warning" 
                    size="sm"
                  >
                    Ver tienda →
                  </Button>
                </Card.Body>
              </Card>

              {/* Próximos partidos con chat */}
              <Card className="shadow-sm mt-4">
                <Card.Header className="bg-primary text-white">
                  <h5 className="mb-0">⚽ Chats de Partidos</h5>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={6}>
                      <div className="border rounded p-3 mb-2">
                        <h6>Partido 2021_09_01_1</h6>
                        <p className="small text-muted">15 Mar - 10:00 AM</p>
                        <Button 
                          as={Link} 
                          to="/game/game-1/mensajes" 
                          variant="outline-primary" 
                          size="sm"
                        >
                          Ir al chat 💬
                        </Button>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="border rounded p-3 mb-2">
                        <h6>Partido 2021_09_02_1</h6>
                        <p className="small text-muted">16 Mar - 3:00 PM</p>
                        <Button 
                          as={Link} 
                          to="/game/game-2/mensajes" 
                          variant="outline-primary" 
                          size="sm"
                        >
                          Ir al chat 💬
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      )}

      {/* Mensaje para usuarios no logueados - opcional */}
      {!user && (
        <Row className="justify-content-center mt-5 pt-4 border-top">
          <Col md={8} className="text-center">
            <Card className="bg-light">
              <Card.Body>
                <h5 className="text-muted mb-3">🔒 Foro de la Comunidad</h5>
                <p>
                  <Link to="/" onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('.btn-outline-light')?.click();
                  }}>
                    Inicia sesión
                  </Link> para participar en el foro y acceder a los chats de los partidos.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Home;