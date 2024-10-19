import React from 'react'
import { Link } from 'react-router-dom'

function Error({message}) {
  return (
    <div>
        <p>{message}</p><br/>
        <Link to="/">Voltar</Link>
    </div>
  )
}

export default Error