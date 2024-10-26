import React, {useState} from 'react'
import Form from '../../components/Form/Form'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import style from './update.module.css'

function Update() {

  const[movieData, setMovieData] = useState(null)
  const navigate = useNavigate();

  const handleMovieData = (data) => {
    setMovieData(data)
   
    
  };

  function updateMovie(e){
    e.preventDefault()

    axios.put('https://6713eadf690bf212c760321c.mockapi.io/movies/'+movieData.id, movieData)
      .then(res=> navigate('/'))
      .catch(err => console.error(err))
    
  }

  return (
    <div>
        <Form onSubmit={handleMovieData} page='Editar Filme'/>

        {movieData &&
          <form onSubmit={updateMovie} className={style.formUpdate}>
            <label htmlFor="">Nome:</label><br />
            <input type="text" value={movieData.name} onChange={(e)=>setMovieData({...movieData, name:e.target.value})} /><br />

            <label htmlFor="">Gênero:</label><br />
            <input type="text" value={movieData.genre} onChange={(e)=>setMovieData({...movieData, genre:e.target.value})}/><br />

            <label htmlFor="">Ano:</label><br />
            <input type="text" value={movieData.any} onChange={(e)=>setMovieData({...movieData, any:e.target.value})} /><br />

            <div className={style.events}>
              <button onClick={updateMovie}>Alterar</button> 
              <Link className={style.link} to="/">Voltar</Link>
            </div>
            
          </form>
        }

    </div>
  )
}

export default Update