import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faM } from '@fortawesome/free-solid-svg-icons'
import { faG } from '@fortawesome/free-solid-svg-icons'
import { Container, Navbar, Nav } from "react-bootstrap";
import './NavbarSite.css';

const NavBarSite = () => {
    return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top" variant="dark">
      <Container>
        <Navbar.Brand href="#">
          <h6 className='navBarText'>
          <FontAwesomeIcon icon={faM}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faG}></FontAwesomeIcon>
          </h6>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#ExperienceID"><h6 className="linkText">Experience</h6></Nav.Link>
            <Nav.Link href="#ProjectsID"><h6 className="linkText">Projects</h6></Nav.Link>
            <Nav.Link href="MarcoGonzalezResume.pdf" download="MarcoGonzalezResume.pdf"><h6 className="linkText">Download Resume</h6></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  )
}
export default NavBarSite