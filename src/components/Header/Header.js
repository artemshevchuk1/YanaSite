import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../Photo/Logo.png';

export default class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="md" bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} width="30" height="30" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='me-auto'>
                <Nav.Link href='/'> Home </Nav.Link>
                <Nav.Link href='/about'> About </Nav.Link>
                <Nav.Link href='/contacts'> Contacts </Nav.Link>
                <Nav.Link href='/blog'> Blog </Nav.Link>
            </Nav>
            <Form className="d-flex">
                <FormControl
                type='text'
                placeholder='Пошук'
                className='d-inline mx-2'
                />
                <Button variant='outline-info'>Пошук</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
