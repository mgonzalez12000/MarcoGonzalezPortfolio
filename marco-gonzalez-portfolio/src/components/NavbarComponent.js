import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faM, faG } from '@fortawesome/free-solid-svg-icons';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './NavbarComponent.css';

const NavbarComponent = (props) => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top" variant="dark">
      <Container>
        <Navbar.Brand href="#">
          <h6 className="navBarText">
            <FontAwesomeIcon icon={faM} />
            <FontAwesomeIcon icon={faG} />
          </h6>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#ExperienceID"><h6 className="linkText">{props.item1}</h6></Nav.Link>
            <Nav.Link href="#ProjectsID"><h6 className="linkText">{props.item2}</h6></Nav.Link>
            <Nav.Link href="#TechnicalSkillsID"><h6 className="linkText">{props.item3}</h6></Nav.Link>
            <Nav.Link href="MarcoGonzalezResume.pdf" download="MarcoGonzalezResume.pdf">
              <h6 className="linkText">{props.downloadItem}</h6>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
