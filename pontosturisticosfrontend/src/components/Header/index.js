
import { Link } from 'react-router-dom';
import './styles.css';

const Header = ()=> {
  return (
   <header>
     <div className='container'>
       <div className="menu">
        <nav>
          <ul>
            <li className="active">
              <Link 
                style={{
                  textDecoration:"none",
                  display:"block",
                  padding:"15px",
                  textTransform:"uppercase",
                  color:"#054f77",
                  fontFamily:"Arial",
                }} 
                to="/"><strong>Home</strong>
              </Link>
            </li>
            <li className="active">
              <Link 
                style={{
                  textDecoration:"none",
                  display:"block",
                  padding:"15px",
                  textTransform:"uppercase",
                  color:"#054f77",
                  fontFamily:"Arial"
                }}
                to="/cadastrar"><strong>Cadastrar</strong>
              </Link>
            </li>
          </ul>
        </nav>
       </div>
     </div>
   </header>
  );
}

export default Header;
