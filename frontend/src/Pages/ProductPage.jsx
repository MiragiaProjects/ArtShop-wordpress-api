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
  console.log('data',data)

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

      <img src={data._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url} alt="" />

      <div>
      <p dangerouslySetInnerHTML={{ __html: data.content.rendered}}></p>
      <p>{data.acf.price_on_a_product}</p>
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