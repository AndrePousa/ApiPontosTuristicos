import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import PontoTuristico from '../../components/PontoTuristico';
import './styles.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Home = ()=> {

  const [pontosTuristicos, setPontosturisticos] = useState([])

  const fetchPontosTuristicos = () =>{
    axios.get('https://localhost:44329/api/PontosTuristicos')
      .then(function(response){
          setPontosturisticos(response.data); 
      })
  };

  useEffect(()=>{
    fetchPontosTuristicos()
  },[])

  return (
    <div className="homeContainer">
      <div className="homeUp">
        <Logo/>
        <div>
          <button className="buttonCadastrarPontoTuristico"><Link style={{textDecoration:"none"}} to="/cadastrar">Cadastrar um ponto turístico</Link></button>
        </div>
      </div>
      <div className="homeDown">
        <div className="divInput">
          <input 
            className="inputCamp"
            placeholder='Digite sua busca'
            />
        </div>
        <div className="searchButton">
          <button>Buscar</button>
        </div>
      </div>
      <div className="pontoTuristicoContiner">
        <div className="pontoTuristicoSide">
          {pontosTuristicos.map((item, index)=> (
            <PontoTuristico data={item}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
