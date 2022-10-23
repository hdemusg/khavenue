import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'

class NavigationBar extends React.Component {
    render() {
      return (<Navbar style={{marginTop: '0px'}} className="navbar" fixed="top">
      <Container>
      <div style={{justifyContent: 'space-between', lineHeight: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '10px'}}>
      <h1 className="nav-title">khavenue</h1>
      {this.props.profile}
      </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>)
    }
  }

export default NavigationBar;