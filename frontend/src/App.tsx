import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import AppNavbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import ResourcesPage from './pages/ResourcesPage';
import EventsPage from './pages/EventsPage';
import ForumPage from './pages/ForumPage';



const App: React.FC = () => {
  const location = useLocation();
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 bg-dark">
        <AppNavbar />
        <main className="flex-grow-1 py-4">
          <Container>
            <div key={location.pathname} className="fade-in-content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/announcements" element={<AnnouncementsPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/forum" element={<ForumPage />} />
              </Routes>
            </div>
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
