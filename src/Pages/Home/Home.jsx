import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Home() {

    const[data, setData] = useState([])

    useEffect(()=>{
        axios.get('https://6713eadf690bf212c760321c.mockapi.io/movies')
            .then(res=>setData(res.data))
            .catch(err=>console.error(err))

    },[]);

  return (
    <div>
        <h1>Lista de Usuários</h1>

        {
            data.map((d,i)=>(
                <Link key={i} to={`/read/${d.id}`}>
                    <div>
                        <span>ID: {d.id}</span>
                        <span>Nome: {d.nome}</span>
                    </div>

                </Link>
                
            ))
        }
       
    </div>


  )
}

export default Home