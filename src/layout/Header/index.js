import React from "react";
import { Link } from "gatsby";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./Header.scss";

const SiteHeader = () => (
  <header className="site-header">
    <Navbar expand="lg" variant="dark">
      <Container id="logo-container">
        <Link to="/" className="navbar-brand" id="logo">
          <div className="tomreid">TOM REID</div>
          <div className="dotai">.ai</div>
        </Link>
        <Navbar.Toggle aria-controls="header-main-navigation" />
        <Navbar.Collapse id="header-main-navigation">
          <Nav>
            <div className="nav-item">
              <Link
                to="/"
                className="nav-link"
                activeClassName="active"
                id="toms-nav-link"
              >
                home
              </Link>
            </div>
            <div className="nav-item">
              <Link
                to="/about"
                className="nav-link"
                activeClassName="active"
                id="toms-nav-link"
              >
                about
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="mobile-header-bottom">
    <div className="tom-container">
    <Link to="/" className="tom-mobile-nav" activeClassName="active" id="toms-nav-link">
                home
              </Link>
    <Link to="/about" className="tom-mobile-nav" activeClassName="active" id="toms-nav-link">
                about
              </Link>
    </div>
    </div>
  </header>
);

export default SiteHeader;
