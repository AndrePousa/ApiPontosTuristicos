import { useParams } from 'react-router-dom';
import FormPontoTuristico from '../../components/FormPontoturistico';
import Logo from '../../components/Logo';
import './styles.css';


const Register = ()=> {
 

  const { id } = useParams();
  console.log(id)

  return (
   <div className="registerContainer">
      <div className="registerUp">
        <Logo/>
      </div>
      <div className="registerDown">
        <FormPontoTuristico id={id} />
      </div> 
   </div>
  );
}

export default Register;
