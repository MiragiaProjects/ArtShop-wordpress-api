import React from 'react'
import { useParams, Link} from 'react-router-dom'
import Container  from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import { useQuery } from 'react-query'
import Button from 'react-bootstrap/Button'
import  ListGroup  from 'react-bootstrap/ListGroup'
import { ListGroupItem } from 'react-bootstrap'
import { getPosts } from '../services/helper'

const NewsPage = () => {
    const { post_id } = useParams()
    const { data, isLoading, isError, error } = useQuery(['post', post_id], () => getPosts(post_id))

  return (
    <Container>
        <h2>Posts</h2>
        {isLoading && (<p className='my-3'>Loading ...</p>)}

        {isError && (
            <Alert>
                <p>Oh no, error!</p>
                <p>{error.message}</p>
            </Alert>
        )}

{data && (
            <>
          <div>
            {data.map(post => (
              <>
             <div> 
                <h2>
                  {post.title.rendered}
                </h2>
                <article>
                    {post.content.rendered}
                </article>
             </div>
             </>
            ))}
          </div>
            </>
        )}
    </Container>
  )
}

export default NewsPage