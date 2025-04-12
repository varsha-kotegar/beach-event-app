// src/pages/Beaches.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Beaches.css';

const Beaches = () => {
  return (
    <Container className="beaches">
      <h2 className="text-center mb-4">Top Beaches</h2>
      <Row>
        <Col md={4}>
          <Card className="beach-card">
            <Card.Body>
              <Card.Title>Paradise Beach</Card.Title>
              <Card.Text>Crystal-clear waters and golden sand.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="beach-card">
            <Card.Body>
              <Card.Title>Sunset Bay</Card.Title>
              <Card.Text>Perfect place to enjoy sunsets.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="beach-card">
            <Card.Body>
              <Card.Title>Wavepoint</Card.Title>
              <Card.Text>Surfer's favorite destination.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Beaches;
