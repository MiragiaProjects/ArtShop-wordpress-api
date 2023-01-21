import React from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';


const Cart = ( props ) => {
    const { cartItems, onAddToCart, onRemoveFromCart } = props
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
      <aside >
        <h2>Cart Items</h2>
        <div>
          {cartItems.length === 0 && <div>Cart is empty</div>}
          {cartItems.map((item) => (
            
            <div key={item.id} className="row">
              <div className="col-2">{item.title.rendered}</div>
              <div className="col-2">
                <Button onClick={() => onRemoveFromCart(item)} className="remove">
                  -
                </Button>{' '}
                <Button onClick={() => onAddToCart(item)} className="add">
                  +
                </Button>
              </div>
  
              <div className="col-2 text-right">
                {item.qty} x kr{Number(item.acf.price_on_a_product)}
              </div>
            </div>
          ))}
  
          {cartItems.length !== 0 && (
            <>
              <hr></hr>
              <div className="row">
                <div className="col-2">Items Price</div>
                <div className="col-1 text-right">${Number(itemsPrice)}</div>
              </div>
              <div className="row">
                <div className="col-2">Tax Price</div>
                <div className="col-1 text-right">${Number(taxPrice)}</div>
              </div>
              <div className="row">
                <div className="col-2">Shipping Price</div>
                <div className="col-1 text-right">
                  ${shippingPrice}
                </div>
              </div>
  
              <div className="row">
                <div className="col-2">
                  <strong>Total Price</strong>
                </div>
                <div className="col-1 text-right">
                  <strong>${Number(totalPrice)}</strong>
                </div>
              </div>
              <hr />
              <div className="row">
                <Button onClick={() => alert('Implement Checkout!')}>
                  Checkout
                </Button>
              </div>
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
            </>
          )}

        </div>
        <div>
    
        </div>
      </aside>
  )
}

export default Cart