import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Container  from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useQuery } from 'react-query'
import Button from 'react-bootstrap/Button'
import { getProduct } from '../services/helper'

const ProductPage = () => {
  const { product_id } = useParams()
  const { data, isLoading, isError, error} = useQuery(['product', product_id], () => getProduct(product_id))

  return (
    <Container>
      {isLoading && (<p className='my-3'>Loading ...</p>)}

      {isError && (
        <Alert>
        <p>Oh no, error!</p>
        <p>{error.message}</p>
    </Alert>)}

    {data && (
      <>
      <div>
      <h3>{data.title.rendered}</h3>

      <div>
        {data.content.rendered}
        {data.acf.price_on_a_product}
      </div>
    
      <Button>
        Buy
      </Button>
      </div>
      </>
    )}

    </Container>
  )
}

export default ProductPage