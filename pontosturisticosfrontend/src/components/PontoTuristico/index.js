import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { API_URL } from '../../config';

const PontoTuristico = ({data,refresh}) =>{

  const deletePontoTuristico = async () =>{

    let response = await axios.delete(`${API_URL}api/PontosTuristicos/${data.id}`)
    Swal.fire("O Cadastro foi excluido.")
    refresh();
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