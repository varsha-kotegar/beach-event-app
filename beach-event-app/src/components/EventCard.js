// src/components/EventCard.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import './EventCard.css';

const EventCard = ({ event }) => {
  return (
    <Card className="event-card">
      <div className="event-card-image" />
      <Card.Body>
        <Card.Title>{event.title}</Card.Title>
        <Card.Text><strong>Date:</strong> {event.date}</Card.Text>
        <Card.Text><strong>Location:</strong> {event.location}</Card.Text>
        <Card.Text>{event.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default EventCard;
