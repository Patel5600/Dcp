import React, { useEffect, useState } from 'react';

interface Announcement {
  id: number;
  title: string;
  content: string;
}

const AnnouncementsPage: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/announcements')
      .then(response => response.json())
      .then(data => setAnnouncements(data));
  }, []);

  return (
    <div>
      <h2>Announcements</h2>
      {announcements.map(announcement => (
        <div key={announcement.id}>
          <h3>{announcement.title}</h3>
          <p>{announcement.content}</p>
        </div>
      ))}
    </div>
  );
};

export default AnnouncementsPage;
