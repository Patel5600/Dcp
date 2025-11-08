import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <h1>Department Connect</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/announcements">Announcements</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/forum">Forum</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
