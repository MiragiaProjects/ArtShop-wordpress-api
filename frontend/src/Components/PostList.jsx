import React from 'react'

const PostList = ({ data }) => {
  return (
    <div className='d-flex flex-wrap justify-content-between'>
        {data.posts.map(post => (
            <div>
                <p>{post.title}</p>
            </div>
        ))}

    </div>
  )
}

export default PostList