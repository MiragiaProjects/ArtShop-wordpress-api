import React from 'react'
import { useQuery } from 'react-query'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown  from 'react-bootstrap/Dropdown'
import { Link, NavLink } from 'react-router-dom'


const Navigation = () => {
  return (
  <Navbar bg="dark" variant="dark" expand="md">
    <Container>
        <Navbar>
            <Nav.Link as={NavLink} end to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} end to="/">News</Nav.Link>
            <Nav.Link as={NavLink} end to="/">Products</Nav.Link>
            <Nav.Link as={NavLink} end to="/">Info</Nav.Link>
        </Navbar>
    </Container>

  </Navbar>
  )
}

export default Navigation