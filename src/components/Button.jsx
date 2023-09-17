import React from 'react'

function Button({obj} ) {
  return (
    <div style={{padding:"10px"}}>
      <button className='button' style={{width:"70px",height:"25px"}}> {obj}</button>
    </div>
  )
}

export default Button