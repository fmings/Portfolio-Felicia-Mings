/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav,
} from 'react-bootstrap';

export default function NoAuthNavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar-style">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand><img className="logo-image" src="/logo-white.png" alt="logo with the letters FM" /></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/aboutme">
              <Nav.Link>About Me</Nav.Link>
            </Link>
            <Link passHref href="/myresume">
              <Nav.Link>My Experience</Nav.Link>
            </Link>
            <Link passHref href="/myprojects">
              <Nav.Link>My Projects</Nav.Link>
            </Link>
            <Link passHref href="/contact">
              <Nav.Link>Contact Me</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
