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
          
            <h4 className="pontoTuristicoName">Nome:</h4>
              {data.name} 
          
          
            <h4 className="pontoTuristicoDescription">Descrição:</h4>
              {data.description} 
          
          
            <h4 className="pontoTuristicoAddres">Localização:</h4>
              {data.address}
          
          
            <h4 className="pontoTuriscoCity">Cidade:</h4>
              {data.city}
          
          
            <h4 className="pontoTuristicoState">Estado:</h4>
              {data.state}
          
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