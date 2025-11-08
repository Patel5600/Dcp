import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const HomePage: React.FC = () => {
  return (
    <Row className="justify-content-center">
      <Col md={8}>
        <Card className="mb-3 rounded-3 shadow-sm text-light">
          <Card.Body>
            <Card.Title as="h2" className="text-primary">Welcome to Department Connect</Card.Title>
            <Card.Text>
              This platform is designed to keep you connected with the latest happenings, resources, and events within the Department of Computer Science. Explore the navigation above to find announcements, academic resources, upcoming events, and engage in discussions on the forum.
            </Card.Text>
            <Card.Text>
              We aim to foster a vibrant and informed community. Your feedback is always welcome as we continue to improve this platform.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default HomePage;
