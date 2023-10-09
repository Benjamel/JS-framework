import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Footer.module.css';

function Footer() {
  return (
    <Navbar bg='dark' variant='dark' fixed='bottom'>
      <Container>
        <Navbar.Text className={styles.FooterStyling}>
          &copy; 2023 My First React Project
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Footer;
