import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useWindowScrollPositions } from "./ScrollPosition";

const MyNavbar = ({ offset }) => {
  const { scrollY } = useWindowScrollPositions();
  const { aboutTop, skillsTop, servicesTop, projectsTop, contactTop } = offset;

  return (
    <Navbar
      variant="dark"
      expand="lg"
      fixed="top"
      collapseOnSelect
      className="my-nav py-2"
    >
      <Container fluid="md xl">
        <Navbar.Brand className="my-brand me-5 fw-bold" href="#">
          <img width={70} src="images/logo.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="my-nav" />
        <Navbar.Collapse id="my-nav">
          <Nav>
            <Nav.Link
              className="text-light"
              href="#home"
              active={scrollY < aboutTop - 20 ? true : false}
            >
              <div className="nav-menu">HOME</div>
            </Nav.Link>
            <Nav.Link
              className="text-light"
              href="#about"
              active={
                scrollY > aboutTop - 20 && scrollY < skillsTop - 20
                  ? true
                  : false
              }
            >
              <div className="nav-menu">ABOUT</div>
            </Nav.Link>
            <Nav.Link
              className="text-light"
              href="#skills"
              active={
                scrollY > skillsTop - 20 && scrollY < servicesTop - 20
                  ? true
                  : false
              }
            >
              <div className="nav-menu">SKILLS</div>
            </Nav.Link>
            <Nav.Link
              className="text-light"
              href="#services"
              active={
                scrollY > servicesTop - 20 && scrollY < projectsTop - 20
                  ? true
                  : false
              }
            >
              <div className="nav-menu">SERVICES</div>
            </Nav.Link>
            <Nav.Link
              className="text-light"
              href="#projects"
              active={
                scrollY > projectsTop - 20 && scrollY < contactTop + 300
                  ? true
                  : false
              }
            >
              <div className="nav-menu">PROJECTS</div>
            </Nav.Link>
          </Nav>

          <Nav.Link className="ms-auto my-3 my-lg-0 my-xl-0" href="#contact">
            <input
              type="button"
              className="btn btn-sm btn-outline-warning "
              value="CONTACT"
            />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
