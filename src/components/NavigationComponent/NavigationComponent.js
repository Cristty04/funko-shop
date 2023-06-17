import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const NavigationComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
        
        </Navbar.Brand>
        <Nav>
          <Link className="nav-link" to='/Home'>Home</Link>
          <Link className="nav-link" to='/FunkoPop'>FunkoPop</Link>
          <Link className="nav-link" to='/About'>About</Link>
          <Link className="nav-link" to='/Login'>Login</Link>
        

        </Nav>

      </Container>
    
  
  
  </Navbar>
  )
};

NavigationComponent.propTypes = {};

NavigationComponent.defaultProps = {};

export default NavigationComponent;
