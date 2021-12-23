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
            <h4>Nome:</h4>
              {data.name} 
          </div>
          <div className="pontoTuristicoDescription">
            <h4>Descrição:</h4>
              {data.description} 
          </div>
          <div className="pontoTuristicoAddres">
          <h4>Localização:</h4>
              {data.adress}
          </div>
          <div className="pontoTuriscoCity">
            <h4>Cidade:</h4>
              {data.city}
          </div>
          <div className="pontoTuristicoState">
            <h4>Estado:</h4>
              {data.state}
          </div>
          <div className="areaButtons">
            <button><Link style={{textDecoration:"none"}} to={`/cadastrar/${data.id}`}>Editar</Link></button>
            <button className="deletarButton" onClick={deletePontoTuristico}>Deletar</button>
          </div>
          <hr/>
        </div> 
    </> 
  )

}

export default PontoTuristico;