import React, {useState} from 'react'
import Form from '../../components/Form/Form'
import Alert from '../../components/Alert/Alert'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

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
    <div>
        <Form onSubmit={handleMovieData}/>

        {movieData &&
          
            <div>
              <p>Nome: {movieData.name}</p>
              <p>Gênero: {movieData.genre}</p>
              <p>Ano: {movieData.any}</p>
           

              <button onClick={removeMovie}>Apagar</button> 
              <Link to="/">Voltar</Link>
            </div>
           
        }

        {showAlert && <Alert message='Filme apagado com sucesso'/>}
    </div>
  )
}

export default Remove