import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, NavLink } from 'react-router-dom';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import profile from '../../../assets/images/profile.png';

const Header = () => {
  return (
    <>
      {['xl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="py-3 navbar-container">
          <Container>
            <Link to="/">
              <Navbar.Brand>
                <img
                  alt=""
                  src={profile}
                  width="40"
                  height="40"
                  className="d-inline-block align-center me-2 mb-1"
                />
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
                    <Navbar.Brand>
                      <img
                        alt=""
                        src={profile}
                        width="40"
                        height="40"
                        className="d-inline-block align-center me-2"
                      />
                      <span className="d-inline-block text-white">
                        Mahamudul Hasan
                      </span>
                    </Navbar.Brand>
                  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body bg="dark" variant="dark">
                <Nav className="mx-auto  nav-items">
                  <NavLink
                    to="/"
                    // className={({ isActive }) =>
                    //   isActive ? 'active' : undefined
                    // }
                  ></NavLink>
                  <NavLink to="/">Home</NavLink>
                  <a href="#about">About </a>
                  <a href="#projects">Projects</a>
                  <a href="#contact">Contact</a>
                </Nav>

                <Nav className="important-links mt-4 mt-xl-0">
                  <a
                    href="https://github.com/mahmud035"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithubSquare size={30} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mahmud035/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin size={30} />
                  </a>
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
