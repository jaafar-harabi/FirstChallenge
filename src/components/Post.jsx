import React from 'react'

function Post({title,description}) {
  return (
    <div className='post'>
      <h1> {title} </h1>
      <hr/>
      <p>  {description} </p>
    </div>
  )
}

export default Post