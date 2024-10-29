import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Alert from '../Alert/Alert'
import style from './form.module.css'

function Form({ onSubmit, page }) {

    const[id, setId] = useState('')
    const[error, setError] = useState(false)


    function getMovieById(e){
       e.preventDefault()
       setError(false)
       
       if(id!=''){
        axios.get('https://6713eadf690bf212c760321c.mockapi.io/movies/'+id)
            .then(res=>{
                onSubmit(res.data)
                setId('')
            })
            .catch(err =>{
              onSubmit(null)
              setError('ID não encontrado!')
            })
       }else{
        setError('Por favor digite algum ID!')
       }

       
        
    }

  return (
    <div className={style.divForm}>
      <h1>{page}</h1>
        <form onSubmit={getMovieById}>
            <label htmlFor="movieId">Id:</label><br />
            <input type="number" value={id} onChange={(e)=>setId(e.target.value)} /><br />
            <div className={style.events}>
              <button onClick={getMovieById}>Procurar</button>
              <Link className={style.link} to="/">Cancelar</Link>
            </div>
            
        </form>

        {error && <Alert message={error}/>}
        
    </div>
  )
}

export default Form