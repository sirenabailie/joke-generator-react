/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';
import '../styles/globals.css'; // Import the global styles

export default function NavBar() {
  const handleBrandClick = (e) => {
    e.preventDefault();
    window.location.href = '/'; // Reload the home page
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    window.location.href = '/'; // Reload the home page
  };

  return (
    <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: 'transparent' }}>
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand className="custom-navbar-brand" onClick={handleBrandClick}>
            Joke Generator
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link href="/" passHref>
              <Nav.Link
                className="custom-nav-link"
                onClick={handleHomeClick} // Add onClick to refresh the homepage
              >
                Home
              </Nav.Link>
            </Link>
            <Button variant="danger" onClick={signOut}>
              Sign Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
