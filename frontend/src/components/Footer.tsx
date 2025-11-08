import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="footer-custom py-3 fixed-bottom">
      <Container>
        <Row>
          <Col className="text-center text-muted small">
            &copy; 2025 Department of Computer Science
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
