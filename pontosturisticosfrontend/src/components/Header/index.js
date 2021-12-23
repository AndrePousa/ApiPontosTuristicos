
import { Link } from 'react-router-dom';
import './styles.css';

const Header = ()=> {
  return (
   <div className='header'>
     <div className='headerBody'>
       <ul className="ul">
         <li className="li"><Link style={{textDecoration:"none"}} to="/">Home</Link></li>
         <li className="li"><Link style={{textDecoration:"none"}} to="/cadastrar">Cadastrar</Link></li>
       </ul>
     </div>
   </div>
  );
}

export default Header;
