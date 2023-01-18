import React from 'react'
import { useParams, Link} from 'react-router-dom'
import { useState } from 'react'
import Container  from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import { useQuery } from 'react-query'
import Button from 'react-bootstrap/Button'
import  ListGroup  from 'react-bootstrap/ListGroup'
import { ListGroupItem } from 'react-bootstrap'
import { getProducts } from '../services/helper'
import ProductCard from '../Components/ProductCard'


const ProductsPage = () => {
  const { product_id } = useParams()
  const { data, isLoading, isError, error} = useQuery(['product', product_id], () => getProducts(product_id))
  const [ cartItems, setCartItems ] = useState([])
  return (
    <Container>
      <h1>Art</h1>
      {isLoading && (<p className='my-3'>Loading ...</p>)}

{isError && (
    <Alert>
        <p>Oh no, error!</p>
        <p>{error.message}</p>
    </Alert>)}

      {data && <ProductCard data={data} />} 

    </Container>
  )
}

export default ProductsPage