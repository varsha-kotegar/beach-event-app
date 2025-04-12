// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
            <p>&copy; {new Date().getFullYear()} BeachFest. All Rights Reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="/privacy-policy" className="footer-link">Privacy Policy</a> |{' '}
            <a href="/terms" className="footer-link">Terms & Conditions</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
