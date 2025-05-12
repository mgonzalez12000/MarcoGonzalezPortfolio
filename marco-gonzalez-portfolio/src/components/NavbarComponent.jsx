import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faM, faG } from "@fortawesome/free-solid-svg-icons";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./NavbarComponent.css";

const NavbarComponent = ({
  experience,
  projects,
  technicalSkills,
  downloadItem,
  scrollToSection,
}) => {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      fixed="top"
      variant="dark"
    >
      <Container>
        <Navbar.Brand>
          <h6 className="navBarText">
            <FontAwesomeIcon icon={faM} />
            <FontAwesomeIcon icon={faG} />
          </h6>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => scrollToSection("ExperienceID")}>
              <h6 className="linkText">{experience}</h6>
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("ProjectsID")}>
              <h6 className="linkText">{projects}</h6>
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("TechnicalSkillsID")}>
              <h6 className="linkText">{technicalSkills}</h6>
            </Nav.Link>
            <Nav.Link
              href="MarcoGonzalezResume.pdf"
              download="MarcoGonzalezResume.pdf"
            >
              <h6 className="linkText">{downloadItem}</h6>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
