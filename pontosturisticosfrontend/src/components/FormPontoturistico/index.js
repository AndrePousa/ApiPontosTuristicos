import axios from 'axios';
import { Alert } from 'bootstrap';
import React, {useEffect, useState} from 'react';
import Swal from 'sweetalert2';
import './styles.css';

const FormPontoTuristico = ({ id }) => {

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [description, setDescription] = useState('');

  const savePontoTuristico = async (event)=> {
    event.preventDefault();

    if(id){
      let response = await axios.put(`https://localhost:44329/api/PontosTuristicos/${id}`, {
        id:id,
        name:name,
        address:address,
        city: city,
        description:description,
        state:state,
      }); 
      Swal.fire("Cadastro efetuado com sucesso")
    }
    else{
      let response = await axios.post('https://localhost:44329/api/PontosTuristicos',{
        name:name,
        address:address,
        city: city,
        description:description,
        state:state,
      });
      Swal.fire("Cadastro efetuado com sucesso")  
    }
  }
  
  const getPontoTuristico = async (id) => {
     
    const response = await axios.get(`https://localhost:44329/api/PontosTuristicos/${id}`)

    if(response.data){
      setName(response.data.name);
      setAddress(response.data.address);
      setCity(response.data.city);
      setState(response.data.state);
      setDescription(response.data.description);
    }
  }

  useEffect(()=> {
    if(id){
      getPontoTuristico(id) 
    }
  },[])

  return(
    <>
      <div className="formContainer">
        <form>
            <h2>Cadastrar Ponto Turistico</h2>
            <label for="name"><strong>Nome:</strong></label><br/>
            <input  className="fieldName" value={name} type="text" name="name" onChange={ e => setName(e.target.value)}/><br/>
           
            <label for="city"><strong>Cidade:</strong></label><br/>
            <input className="fieldCity" value={city} type="text" name="city" onChange={e => setCity(e.target.value)}/><br/>
          
            <label for="address"><strong>Endereço/Localização:</strong></label><br/>
            <input className="fieldAddress" value={address} type="text" name="address" onChange={e => setAddress(e.target.value)}/><br/>
          
            <label for="state"><strong>Estado:</strong></label><br/>
            <select className="fieldState" value={state} name="state" onChange={e => setState(e.target.value)}><br/>
              <option>Selecione o Estado</option>
              <option value="Acre">Acre</option>
              <option value="Alagoas">Alagoas</option>
              <option value="Amapá">Amapá</option>
              <option value="Amazonas">Amazonas</option>
              <option value="Bahia">Bahia</option>
              <option value="Ceará">Ceará</option>
              <option value="Distrito Federal">Distrito Federal</option>
              <option value="Espirito Santa">Espirito Santo</option>
              <option value="Goiás">Goiás</option>
              <option value="Maranhão">Maranhão</option>
              <option value="Mato Grosso">Mato Grosso</option>
              <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
              <option value="Minas Gerais">Minas Gerais</option>
              <option value="Pará">Pará</option>
              <option value="Paraíba">Paraíba</option>
              <option value="Paraná">Paraná</option>
              <option value="Pernambuco">Pernambuco</option>
              <option value="Piauí">Piauí</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="Rio Grande do Sul">Rio Grande do Sul</option>
              <option value="Rondônia">Rondônia</option>
              <option value="Roraima">Roraima</option>
              <option value="Santa Catarina">Santa Catarina</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Sergipe">Sergipe</option>
              <option value="Tocantins">Tocantins</option>
            </select><br/>
    
            <label for="description"><strong>Descrição:</strong></label><br/>
            <textarea className="fieldDescription" value={description} onChange={e => setDescription(e.target.value)} type="text" name="description">{description}</textarea><br/>
          <button onClick={savePontoTuristico}>Cadastrar</button>
        </form>
      </div> 
    </>
  )
}

export default FormPontoTuristico;