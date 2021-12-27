import { Link } from 'react-router-dom';
import PontoTuristico from '../../components/PontoTuristico';
import './styles.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';


const Home = ()=> {

  const [pontosTuristicos, setPontosturisticos] = useState([])
  const [search, setSearch] = useState('');
  const [count, setCount] = useState(0);

  const fetchPontosTuristicos = (search = '', page = 1) =>{

    let params = `?page=${page}`;

    if(search){
      params += `&search=${search}`
    }

    axios.get(`${API_URL}api/PontosTuristicos${params}`)
      .then(function(response){
          setPontosturisticos(response.data.list); 
          setCount(response.data.count)
      })
  };

  const handleSearch = ()=>{
    fetchPontosTuristicos(search);
  }

  const renderPagination = () =>{
    if (count / 5 <= 1) return null;

    const pages = []

    for(let i = 1; i <= Math.ceil(count/5); i++){
      pages.push(i);
    }

    return <ul className="ListButton">{pages.map((i) => <li><button className="buttonPage" onClick={() => handlePagination(i)}>{i}</button></li>)}</ul>
  }

  const handlePagination = (page) =>{
    fetchPontosTuristicos(search, page);
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
      <div className="renderPaginationContainer">
        {
          renderPagination()
        }
      </div>
      <div className="pontoTuristicoList">
          {pontosTuristicos.map((item, index)=> (
            <PontoTuristico refresh={()=>fetchPontosTuristicos()} data={item}/>
          ))}
          {count == 0 && <h2 className="errMessage">Nenhum Resultado encontrado</h2>}
      </div>
    </div>
  );
}

export default Home;
