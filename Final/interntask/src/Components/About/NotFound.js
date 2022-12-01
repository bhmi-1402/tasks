import React from 'react'
import PropTypes from 'prop-types'

const NotFound = props => {
    console.log("Not Found")
  return (
    <div className='error' style={{margin:"auto",width:"100%"}}>
      <h1 style={{textAlign:"center"}}>Page you are Loading is either invalid or underworking</h1>
    </div>
  )
}


export default NotFound
