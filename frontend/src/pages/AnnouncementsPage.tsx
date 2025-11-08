import React, { useEffect, useState } from 'react';
import { Card, Spinner, Alert, Row, Col } from 'react-bootstrap';

interface Announcement {
  id: number;
  title: string;
  content: string;
}

const AnnouncementsPage: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;
    fetch(`${API_URL}/announcements`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setAnnouncements(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching announcements:", error);
        setError("Failed to load announcements. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <Row className="justify-content-center">
      <Col md={8}>
        <h2 className="text-primary mb-4">Announcements</h2>
        {announcements.length > 0 ? (
          announcements.map(announcement => (
            <Card key={announcement.id} className="mb-3 rounded-3 shadow-sm text-light">
              <Card.Body>
                <Card.Title>{announcement.title}</Card.Title>
                <Card.Text>{announcement.content}</Card.Text>
              </Card.Body>
            </Card>
          ))
        ) : (
          <Alert variant="info">No announcements available at the moment.</Alert>
        )}
      </Col>
    </Row>
  );
};

export default AnnouncementsPage;
