// src/pages/Events.js
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EventCard from '../components/EventCard';
import SearchBar from '../components/SearchBar';
import './Events.css';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const eventList = [
    {
      id: 1,
      title: 'Beach Music Festival',
      date: 'April 20, 2025',
      location: 'Paradise Beach',
      description: 'Live performances by top artists on the beach.',
    },
    {
      id: 2,
      title: 'Sandcastle Competition',
      date: 'April 22, 2025',
      location: 'Golden Shore',
      description: 'Join creative minds and build magical sandcastles.',
    },
    {
      id: 3,
      title: 'Sunset Yoga',
      date: 'April 24, 2025',
      location: 'Sunset Bay',
      description: 'Relax and rejuvenate with yoga as the sun sets.',
    },
  ];

  const filteredEvents = eventList.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="events">
      <h2 className="text-center mb-4">Upcoming Events</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Row>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <Col key={event.id} md={4} className="mb-4">
              <EventCard event={event} />
            </Col>
          ))
        ) : (
          <Col className="text-center mt-4">
            <p>No events found.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Events;
