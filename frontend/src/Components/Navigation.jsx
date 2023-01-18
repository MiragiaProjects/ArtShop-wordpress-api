import React from 'react'
import { useQuery } from 'react-query'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom'


const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
    <Container>
      <Navbar.Brand as={Link} to="/">Art Shop</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} end to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} end to="/news">News</Nav.Link>
          <Nav.Link as={NavLink} end to="/products">Art</Nav.Link>
          <Nav.Link as={NavLink} end to="/info">Information</Nav.Link>
          <Nav.Link as={NavLink} end to="/cart">Cart</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigation