import React from 'react'
import { Link } from 'react-router-dom'
import style from './alert.module.css'

function Error({message}) {
  return (
    <div className={style.alert}>
        <p>{message}</p><br/>
        <Link className={style.link} to="/">Voltar</Link>
    </div>
  )
}

export default Error