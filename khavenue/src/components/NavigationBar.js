import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../app.css'

class NavigationBar extends React.Component {
    render() {
      return (<Navbar className="navbar" fixed="top">
      <Container>
      <div clasName="left">

      </div>
      <h1 className="nav-title">khavenue</h1>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>)
    }
  }

export default NavigationBar;