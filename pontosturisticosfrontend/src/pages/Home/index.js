import { Link } from 'react-router-dom';
import PontoTuristico from '../../components/PontoTuristico';
import './styles.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Home = ()=> {

  const [pontosTuristicos, setPontosturisticos] = useState([])
  const [search, setSearch] =useState('');

  const fetchPontosTuristicos = (search) =>{

    let params = '';

    if(search){
      params = `?search=${search}`
    }

    axios.get(`https://localhost:44329/api/PontosTuristicos${params}`)
      .then(function(response){
          setPontosturisticos(response.data); 
      })
  };

  const handleSearch = ()=>{
    fetchPontosTuristicos(search);
  }

  useEffect(()=>{
    fetchPontosTuristicos()
  },[])

  return (
    <div className="homeContainer">
      <div className="divInput">
        <input 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="inputCamp"
          placeholder='Digite sua busca'
        />
        <button onClick={handleSearch} className="searchButton">Buscar</button>
        <button className="buttonCadastrarPontoTuristico"><Link to="/cadastrar">Cadastrar um ponto turístico</Link></button>
      </div>
      <div className="pontoTuristicoList">
          {pontosTuristicos.map((item, index)=> (
            <PontoTuristico data={item}/>
          ))}
      </div>
    </div>
  );
}

export default Home;
