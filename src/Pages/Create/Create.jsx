import React, {useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import style from './create.module.css'
import Alert from '../../components/Alert/Alert'

function Create() {

  const[values, setValues] = useState({
    name:'',
    genre:'',
    any:''
  })
  const[error, setError] = useState(false)

  const navigate = useNavigate();

  const createMovie = (e)=>{
    e.preventDefault()
    setError(false);
    if(values.name!='' && values.genre!='' && values.any!=''){
      axios.post('https://6713eadf690bf212c760321c.mockapi.io/movies', values)
      .then(res=>navigate('/'))
      .catch(err => console.log(err))
    }else{
      setError('Preencha todos os Campos!')
    }
    
  }

  return (
    <div className={style.divForm}>
      <h1>Cadastrar Filme</h1>
      <form action="">
        <div>
          <label htmlFor="">Nome:</label><br />
          <input type="text"  onChange={(e)=>setValues({...values, name:e.target.value})} /><br />
        </div>

        <div>
          <label htmlFor="">Gênero:</label><br />
          <input type="text" onChange={(e)=>setValues({...values, genre:e.target.value})}/><br />
        </div>
        
        <div>
          <label htmlFor="">Ano:</label><br />
          <input type="text" onChange={(e)=>setValues({...values, any:e.target.value})}/><br />
        </div>
        
        <div className={style.events}>
          <button onClick={createMovie}>Criar</button>
          <Link className={style.link} to="/">Cancelar</Link>
        </div>
        
      </form>


      {error && <Alert message={error}/>}
    </div>
  )
}

export default Create