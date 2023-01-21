import React from 'react'
import { useParams } from 'react-router-dom'
import Container  from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import { useQuery } from 'react-query'
import { getPosts } from '../services/helper'

const FrontPage = () => {
  const { post_id } = useParams()
  const { data, isLoading, isError, error } = useQuery(['post', post_id], () => getPosts(post_id))

 


  return (
    <Container>
      <div className='header-div'>
        <h1 className='frontPage-h1'>Do you need any new art?</h1>
        <hr />
        <h2 className='frontPage-h2'>News</h2>
      </div>
    
        {isLoading && (<p className='my-3'>Loading ...</p>)}

        {isError && (
            <Alert>
                <p>Oh no, error!</p>
                <p>{error.message}</p>
            </Alert>
        )}

        {data && (
            <>
          <div className='front-pagePosts'>
            {data.map(post => (
              <>
              <div>
              {post && ( 
                <img variant='top' src={post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url } />
              )}  
              </div>
             <div>
                <h2 className='post-h2'>
                  {post.title.rendered}
                </h2>
                <article
                dangerouslySetInnerHTML={{ __html: post.content.rendered}}>
                </article>
                <hr />
             </div>
             </>
            ))}
          </div>
            </>
        )}


    </Container>
  )
}

export default FrontPage