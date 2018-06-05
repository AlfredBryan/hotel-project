import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

class CustomNavbar extends Component {
    render() {
        return (
          <Navbar default collapseOnSelect>
              <Navbar.Header>
                  <Navbar.Brand>
                      <Link to="/" ><img src={require('./image/Logo.png')} alt="logo" /> </Link>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                      <Nav pullRight>
                          <NavItem eventKey={1} componentClass={Link} href="/" to="/" >
                          HOME
                          </NavItem>
                          <NavItem eventKey={2} componentClass={Link} href="/about" to="/about" >
                          ABOUT US
                          </NavItem>
                          <NavItem eventKey={3} componentClass={Link} href="/accomodation" to="/accomodation" >
                          ACCOMODATION
                          </NavItem>
                          <NavItem eventKey={4} componentClass={Link} href="/gallery" to="/gallery" >
                          GALLERY 
                          </NavItem>
                          <NavItem eventKey={5} componentClass={Link} href="/elemests" to="/elemests" >
                          ELEMESTS 
                          </NavItem>
                          <NavItem eventKey={6} componentClass={Link} href="/contact" to="/contact" >
                          CONTACT
                          </NavItem>
                          </Nav>
                          </Navbar.Collapse>
                        
              </Navbar>
        );
    }
}

export default CustomNavbar;