import React from 'react';
import { Card } from 'react-bootstrap';

const EventsPage: React.FC = () => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title as="h2">Events</Card.Title>
        <Card.Text>
          Check out upcoming events, workshops, and seminars.
        </Card.Text>
        {/* Add events list here */}
      </Card.Body>
    </Card>
  );
};

export default EventsPage;
