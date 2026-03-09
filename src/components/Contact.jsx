import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { EnvelopeFill, TelephoneFill, GeoAltFill } from 'react-bootstrap-icons';
import nyslData from '../data/nyslData';

const Contact = () => {
  const { contact } = nyslData;

  return (
    <Container>
      <Row className="justify-content-center mb-4">
        <Col md={8} className="text-center">
          <h1 className="display-4 text-primary mb-3">Contact Us</h1>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm text-center p-4 mb-4">
            <Card.Body>
              <EnvelopeFill size={40} className="text-primary mb-3" />
              <h5>Email</h5>
              <Button 
                variant="link" 
                href={`mailto:${contact.email}`}
                className="text-decoration-none"
              >
                {contact.email}
              </Button>
              <p className="text-muted mt-2">We will reply as soon as we can.</p>
            </Card.Body>
          </Card>

          <Card className="shadow-sm">
            <Card.Body>
              <h4 className="text-primary mb-4">League Coordinator</h4>
              <Row>
                <Col md={6} className="mb-3">
                  <div className="d-flex align-items-center">
                    <TelephoneFill className="text-primary me-2" />
                    <div>
                      <h6 className="mb-0">Phone</h6>
                      <a href={`tel:${contact.phone}`} className="text-decoration-none">
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="d-flex align-items-center">
                    <EnvelopeFill className="text-primary me-2" />
                    <div>
                      <h6 className="mb-0">Email</h6>
                      <a href={`mailto:${contact.coordinatorEmail}`} className="text-decoration-none">
                        {contact.coordinatorEmail}
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
              <hr />
              <div className="d-flex align-items-center mt-3">
                <GeoAltFill className="text-primary me-2" />
                <span>{contact.address}</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;