import React from 'react'
import {Alert} from 'react-bootstrap'

function Error({ error}) {
  return (
    <>
    <Alert variant="error">{error}</Alert>
  </>
  )
}

export default Error