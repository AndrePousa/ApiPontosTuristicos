import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const PontoTuristico = ({data}) =>{

  const deletePontoTuristico = async () =>{

    let response = await axios.delete(`https://localhost:44329/api/PontosTuristicos/${data.id}`)
    Swal.fire("O Cadastro foi excluido")
  }
 
  return(
    <>
        <div className="pontoTuristicoContainer">
          <span>
            <span>
              <p className="pontoTuristicoName">Nome:</p>
              <p>{data.name}</p>
            </span>

            <span>
              <p className="pontoTuriscoCity">Cidade/UF:</p>
              <p>{data.city}/{data.state}</p>
            </span>
          </span>
            
          <span>
            <p className="pontoTuristicoAddres">Localização:</p>
            <p>{data.address}</p>
          </span> 
            
          <span>
            <p className="pontoTuristicoDescription">Descrição:</p>
            <p>{data.description}</p>
          </span>
            
          <div className="areaButtons">
            <button className="editarButton"><Link to={`/cadastrar/${data.id}`}>Editar</Link></button>
            <button className="deletarButton" onClick={deletePontoTuristico}>Deletar</button>
          </div>
        </div> 
    </> 
  )

}

export default PontoTuristico;