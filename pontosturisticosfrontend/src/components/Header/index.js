
import { Link } from 'react-router-dom';
import './styles.css';

const Header = ()=> {
  return (
   <div className='header'>
     <div className='headerBody'>
       <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/cadastrar">Cadastrar</Link></li>
       </ul>
     </div>
   </div>
  );
}

export default Header;
