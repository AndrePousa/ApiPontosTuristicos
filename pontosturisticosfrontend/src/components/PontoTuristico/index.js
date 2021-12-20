import React from 'react';
import './styles.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const PontoTuristico = ({data}) =>{

  const deletePontoTuristico = async () =>{

    let response = await axios.delete(`https://localhost:44329/api/PontosTuristicos/${data.id}`)
  }
 
  return(
    <>
       <div className="pontoTuristicoContainer">
         <h3>Ponto Turistico</h3>
         <div className="pontoTuristicoName">
           <h3>Nome:</h3>
          {data.name} 
         </div>
         <div className="pontoTuristicoAddres">
         <h4>Localização:</h4>
           {data.adress}
         </div>
         <div className="pontoTuriscoCity">
           {data.city}
         </div>
         <div className="pontoTuristicoState">
           {data.state}
         </div>
         <button><Link to={`/cadastrar/${data.id}`}>Editar</Link></button>
         <button onClick={deletePontoTuristico}>Deletar</button>
       </div> 
    </> 
  )

}

export default PontoTuristico;