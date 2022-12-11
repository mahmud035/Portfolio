import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      {['xl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="py-3 navbar-container">
          <Container>
            <Link to="/">
              <Navbar.Brand>
                <span className="d-inline-block fw-semibold text-white fs-4">
                  Mahamudul Hasan
                </span>
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className=" text-dark bg-white"
            />
            <Navbar.Offcanvas
              className="navbar-off-canvas"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Link to="/">
                    <Navbar.Brand></Navbar.Brand>
                  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body bg="dark" variant="dark">
                <Nav className="mx-auto  nav-items">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? 'active' : undefined
                    }
                  ></NavLink>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/about">About</NavLink>
                  <NavLink to="/projects">Projects</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                  <NavLink to="/blog">Blog</NavLink>
                </Nav>

                <Nav className="important-links mt-4 mt-xl-0">
                  <a
                    className="resume-btn"
                    href="https://drive.google.com/file/d/1XUTioVsxcvO6owju9ZU1BeOAOqpSm4kj/view?usp=sharing"
                  >
                    Resume
                  </a>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;

//  bg = 'dark';
//  variant = 'dark';

// navbar-dark bg-dark
