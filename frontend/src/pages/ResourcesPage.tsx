import React from 'react';
import { Card } from 'react-bootstrap';

const ResourcesPage: React.FC = () => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title as="h2">Resources</Card.Title>
        <Card.Text>
          Find useful resources, such as documents, links, and other materials.
        </Card.Text>
        {/* Add resources list here */}
      </Card.Body>
    </Card>
  );
};

export default ResourcesPage;
