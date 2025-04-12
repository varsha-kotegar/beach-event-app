// src/pages/AdminDashboard.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <Container className="admin-dashboard">
      <h2 className="text-center mb-4">Admin Dashboard</h2>
      <Row>
        <Col md={4}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title>Total Users</Card.Title>
              <Card.Text>135</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title>Upcoming Events</Card.Title>
              <Card.Text>8</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title>Feedbacks</Card.Title>
              <Card.Text>24 new reviews</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
