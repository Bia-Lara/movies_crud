import React, {useState,useEffect} from 'react'
import Form from '../../components/Form/Form'
import { Link, useNavigate, useParams} from 'react-router-dom'
import axios from 'axios';

function Read() {

  const[data, setData] = useState([])
  const {id} = useParams()

  useEffect(() =>{
    axios.get('https://6713eadf690bf212c760321c.mockapi.io/movies/'+id)
      .then(res=>setData(res.data))
      .catch(err =>console.error(err))

  }, [])

  return (
    <div>
      <h2>Detalhes do Filme</h2>

      <div>
        <p>Nome: {data.name}</p>
        <p>Gênero: {data.genre}</p>
        <p>Ano: {data.any}</p>
      </div>
      

      <Link to='/'>Voltar</Link>
    </div>
  )
}

export default Read