import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Alert from '../Alert/Alert'

function Form({ onSubmit }) {

    const[id, setId] = useState('')
    const[error, setError] = useState(false)


    function getMovieById(e){
       e.preventDefault()
       setError(false)
       
        axios.get('https://6713eadf690bf212c760321c.mockapi.io/movies/'+id)
            .then(res=>{
                onSubmit(res.data)
                setId('')
            })
            .catch(err =>setError(err))
    }

  return (
    <div>
        <form onSubmit={getMovieById}>
            <label htmlFor="movieId">Id:</label><br />
            <input type="number" value={id} onChange={(e)=>setId(e.target.value)} /><br />
            <button onClick={getMovieById}>Procurar</button>
            <Link to="/">Cancelar</Link>
        </form>

        {error && <Alert message='ID não encontrado!'/>}
        
    </div>
  )
}

export default Form