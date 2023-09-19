import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/cart-shopping-svgrepo-com.svg';

function Header() {
  return (
    <Navbar bg='dark' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand href='/'>Navbar</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='/'>Products</Nav.Link>
          <Nav.Link href='/contact'>Contact</Nav.Link>
          <Nav.Link href='/cart'>
            <img src={Logo} alt='Cart' />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
