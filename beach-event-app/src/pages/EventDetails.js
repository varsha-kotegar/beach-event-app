// src/pages/EventDetails.js
import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './EventDetails.css';

const EventDetails = () => {
  return (
    <Container className="event-details">
      <Card className="p-4">
        <h2>Event Title</h2>
        <p><strong>Date:</strong> April 15, 2025</p>
        <p><strong>Location:</strong> Paradise Beach</p>
        <p>Description of the event goes here. Enjoy live music, food, games, and more!</p>
      </Card>
    </Container>
  );
};

export default EventDetails;
