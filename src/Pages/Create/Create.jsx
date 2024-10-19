import React, {useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

function Create() {

  const[values, setValues] = useState({
    name:'',
    genre:'',
    any:''
  })

  const navigate = useNavigate();

  const createMovie = (e)=>{
    e.preventDefault()
    
    axios.post('https://6713eadf690bf212c760321c.mockapi.io/movies', values)
      .then(res=>navigate('/'))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <form action="">
        <label htmlFor="">Nome:</label><br />
        <input type="text"  onChange={(e)=>setValues({...values, name:e.target.value})} /><br />

        <label htmlFor="">Gênero:</label><br />
        <input type="text" onChange={(e)=>setValues({...values, genre:e.target.value})}/><br />

        <label htmlFor="">Ano:</label><br />
        <input type="text" onChange={(e)=>setValues({...values, any:e.target.value})}/><br />

        <button onClick={createMovie}>Criar</button>
        <Link to="/">Cancelar</Link>
      </form>
    </div>
  )
}

export default Create