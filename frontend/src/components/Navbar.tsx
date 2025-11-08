import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BsHouseDoorFill, BsMegaphoneFill, BsBookFill, BsCalendarEventFill, BsChatSquareQuoteFill } from 'react-icons/bs';

const AppNavbar: React.FC = () => {
  const location = useLocation();

  return (
    <Navbar expand="lg" fixed="top" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">Department Connect</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className={location.pathname === '/' ? 'active' : ''}>
              <BsHouseDoorFill className="me-1" /> Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/announcements" className={location.pathname === '/announcements' ? 'active' : ''}>
              <BsMegaphoneFill className="me-1" /> Announcements
            </Nav.Link>
            <Nav.Link as={NavLink} to="/resources" className={location.pathname === '/resources' ? 'active' : ''}>
              <BsBookFill className="me-1" /> Resources
            </Nav.Link>
            <Nav.Link as={NavLink} to="/events" className={location.pathname === '/events' ? 'active' : ''}>
              <BsCalendarEventFill className="me-1" /> Events
            </Nav.Link>
            <Nav.Link as={NavLink} to="/forum" className={location.pathname === '/forum' ? 'active' : ''}>
              <BsChatSquareQuoteFill className="me-1" /> Forum
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
