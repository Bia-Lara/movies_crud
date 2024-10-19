import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import style from './home.module.css'

function Home() {

    const[data, setData] = useState([])

    useEffect(()=>{
        axios.get('https://6713eadf690bf212c760321c.mockapi.io/movies')
            .then(res=>setData(res.data))
            .catch(err=>console.error(err))

    },[]);

  return (
    <div className={style.home}>
        <h1>Filmes</h1>
        <div className={style.cards}>
            {
            data.map((d,i)=>(
                <Link key={i} to={`/read/${d.id}`}>
                    <div className={style.card}>
                        <img src="./imgs/card.svg" alt="" />
                        <h5>ID: {d.id}</h5>
                        <span>{d.name}</span>
                    </div>

                </Link>
                
            ))
            }
        </div>

        
       
    </div>


  )
}

export default Home