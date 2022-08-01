import React from "react";
import { Container, Nav, Navbar, Form } from "react-bootstrap";
import DarkModeToggle from "react-dark-mode-toggle";
// import { setDarkMode, isDarkMode } from "../../App";
import Footer from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="nbar">
      <Navbar expand="lg">
        {/* <Form>
          <Form.Check type="switch" id="custom-switch" label="Light/Dark" />
        </Form> */}
        {/* <div className="text-center"> */}
        {/* <DarkModeToggle
        // onChange={setDarkMode}
        // checked={isDarkMode}
        size={35}
        speed={3}
      /> */}
        <Container>
          {/* <div className="container-fluid"> */}
          <Navbar.Brand 
            
            // href="#contact"
            // onClick={() => handlePageChange("Contact")}
            // // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            // className={
            //   currentPage === "Contact" ? "nav-link active" : "nav-link"
            // }
          >
            <h2>
            Michael
            </h2>
          </Navbar.Brand>
          {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navcon">
            {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav me-auto mb-2 mb-lg-0"> */}
            {/* <div className="navbar-nav"> */}
            <Nav className="me-auto"></Nav>
            <Nav.Link
              href="#home"
              onClick={() => handlePageChange("Home")}
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={
                currentPage === "Home" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </Nav.Link>
            {/* </div>
            <li className="nav-item"> */}
            <Nav.Link
              href="#about"
              onClick={() => handlePageChange("About")}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About
            </Nav.Link>
            {/* </li>
            <li className="nav-item"> */}
            <Nav.Link
              href="#projects"
              onClick={() => handlePageChange("Projects")}
              // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Projects" ? "nav-link active" : "nav-link"
              }
            >
              Projects
            </Nav.Link>
            {/* </li> */}
            {/* <div className="nav-item"> */}
            {/* <Nav.Link
              href="#skills"
              onClick={() => handlePageChange("Skills")}
              // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Skills" ? "nav-link active" : "nav-link"
              }
            >
              Skills
            </Nav.Link> */}
            <Nav.Link
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </Nav.Link>
            {/* </div> */}
            {/* </div>
        </div> */}
            {/* </div> */}
          </Navbar.Collapse>
        </Container>
        {/* </div> */}
      </Navbar>
      <Footer />
    </div>
  );
}

export default NavTabs;
