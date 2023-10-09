import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/cart-shopping-svgrepo-com.svg';
import { useSelector } from '../Cart/Context';
import styles from './Navbar.module.css';

function Header() {
  const cart = useSelector((state) => state.cart);

  return (
    <Navbar bg='dark' data-bs-theme='dark'>
      <Container className={styles.navbar}>
        <Navbar.Brand to='/' as={Link}>
          Store
        </Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link to='/' as={Link}>
            Products
          </Nav.Link>
          <Nav.Link to='/contact' as={Link}>
            Contact
          </Nav.Link>
          <Nav.Link to='/cart' as={Link}>
            <img src={Logo} alt='Cart' />
            <span>Cart ({cart.length})</span>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
