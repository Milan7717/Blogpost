import React from 'react'

const SingleBlog = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h1>{props.content}</h1>
    </div>
  )
}

export default SingleBlog
