import React, {useState} from 'react'
import Form from '../../components/Form/Form'
import Alert from '../../components/Alert/Alert'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import style from './remove.module.css'

function Remove() {
  const[movieData, setMovieData] = useState(null)
  const[showAlert, setShowAlert] = useState(false)
  const navigate = useNavigate();

  const handleMovieData = (data) => {
    setMovieData(data)
  };

  function removeMovie(e){
    e.preventDefault()

    axios.delete('https://6713eadf690bf212c760321c.mockapi.io/movies/'+movieData.id)
      .then(res=>{
        setShowAlert(true)
      })
      .catch(err => console.error(err))
    
  }

  return (
    <div className={style.remove}>
        <Form onSubmit={handleMovieData} page='Remover Filme'/>

        {movieData && !showAlert &&
          
            <div className={style.card}>
              <img src="/imgs/card.svg" alt="Card" />
              <p>Nome: {movieData.name}</p>
              <p>Gênero: {movieData.genre}</p>
              <p>Ano: {movieData.any}</p>
           
              <div className={style.events}>
                <button onClick={removeMovie}>Apagar</button> 
                <Link className={style.link} to="/">Voltar</Link>
              </div>
              
            </div>
           
        }

        <div className={style.removeAlert}>
          {showAlert && <Alert message='Filme apagado com sucesso'/>}
        </div>
       
    </div>
  )
}

export default Remove