import React, {useState,useEffect} from 'react'
import { Link, useParams} from 'react-router-dom'
import axios from 'axios';
import style from './read.module.css'


function Read() {

  const[data, setData] = useState([])
  const {id} = useParams()

  useEffect(() =>{
    axios.get('https://6713eadf690bf212c760321c.mockapi.io/movies/'+id)
      .then(res=>setData(res.data))
      .catch(err =>console.error(err))

  }, [])

  return (
    <div className={style.read}>
      <h1>Detalhes do Filme</h1>

      <div className={style.card}>
        <img src="/imgs/card.svg" alt="Card" />
        <p>Nome: {data.name}</p>
        <p>Gênero: {data.genre}</p>
        <p>Ano: {data.any}</p>
      </div>
      
      <div>
        <Link to='/' className={style.button}>Voltar</Link>
      </div>
      
    </div>
  )
}

export default Read