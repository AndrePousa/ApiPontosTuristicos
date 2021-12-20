import React from 'react';
import './styles.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// "id": 2,
//   "name": "Las Vegas",
//   "address": "California",
//   "city": "Las vegas",
//   "state": "California"

const PontoTuristico = ({data}) =>{
 
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
         <button><Link to={`/cadastrar/${data.id}`}>Ver detalhes</Link></button>
       </div> 
    </> 
  )

}

export default PontoTuristico;