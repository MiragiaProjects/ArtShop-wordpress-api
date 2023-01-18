import React from 'react'
import { Button } from 'react-bootstrap'

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
            </>
          )}
        </div>
      </aside>
  )
}

export default Cart