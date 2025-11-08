import React from 'react';
import { Card } from 'react-bootstrap';

const ForumPage: React.FC = () => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title as="h2">Forum</Card.Title>
        <Card.Text>
          Engage in discussions with fellow students and faculty members.
        </Card.Text>
        {/* Add forum content here */}
      </Card.Body>
    </Card>
  );
};

export default ForumPage;
