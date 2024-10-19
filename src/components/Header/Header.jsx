import React from 'react'

function Header() {
  return (
    <header>
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