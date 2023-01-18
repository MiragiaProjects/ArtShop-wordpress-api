import React from 'react'
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CheckoutPage = () => {
  return (
    <>

    <Container>

    <ListGroup>
        <ListGroupItem>Item</ListGroupItem>
    </ListGroup>


    <Form>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>First and Last Name</Form.Label>
        <Form.Control type="string" placeholder="First and Last Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAdress">
        <Form.Label>Adress</Form.Label>
        <Form.Control type="string" placeholder="Adress" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formTown">
        <Form.Label>Town</Form.Label>
        <Form.Control type="string" placeholder="Town" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPostcode">
        <Form.Label>Postcode/Zipcode</Form.Label>
        <Form.Control type="string" placeholder="Postcode/Zipcode" />
      </Form.Group>

      <div>The only way to pay right now is with invoice</div>

      <Button variant="primary" type="submit">
        Submit Order
      </Button>
    </Form>
    </Container>

    </>
  )
}

export default CheckoutPage