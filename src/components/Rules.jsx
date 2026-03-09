import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import nyslData from '../data/nyslData';

const Rules = () => {
  const rules = nyslData?.rules || {};

  return (
    <Container>
      <Row className="justify-content-center mb-4">
        <Col md={10} className="text-center">
          <h1 className="display-4 text-primary mb-3">Rules of Play & Policies</h1>
          <p className="lead">FIFA rules shall govern NYSL play except as modified herein.</p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={10}>
          <Accordion defaultActiveKey="0" className="shadow-sm">
            <Accordion.Item eventKey="0">
              <Accordion.Header><strong>SPORTSMANSHIP</strong></Accordion.Header>
              <Accordion.Body>{rules.sportsmanship}</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header><strong>FIFA FIELD REGULATIONS</strong></Accordion.Header>
              <Accordion.Body>
                <ol>
                  {rules.fifaRegulations?.map((rule, idx) => (
                    <li key={idx} className="mb-2">{rule}</li>
                  ))}
                </ol>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header><strong>EQUIPMENT</strong></Accordion.Header>
              <Accordion.Body>{rules.equipment}</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header><strong>SUBSTITUTIONS</strong></Accordion.Header>
              <Accordion.Body>{rules.substitutions}</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header><strong>ALL-PLAY</strong></Accordion.Header>
              <Accordion.Body>{rules.allPlay}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Rules;