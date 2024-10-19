import React from 'react'
import style from './header.module.css'

function Header() {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src="./imgs/logo.svg" alt="" />
        <span>Movie Apps</span>
      </div>
        
        <nav>
            <a href="/">Início</a>
            <a href="/create">Criar</a>
            <a href="/update">Alterar</a>
            <a href="/remove">Apagar</a>
        </nav>
    </header>
  )
}

export default Header