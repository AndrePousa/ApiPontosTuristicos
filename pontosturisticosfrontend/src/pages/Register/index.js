import { useParams } from 'react-router-dom';
import FormPontoTuristico from '../../components/FormPontoturistico';
import './styles.css';


const Register = ()=> {
 

  const { id } = useParams();
  console.log(id)

  return (
      <>
        <div className="registerContainer">
          <FormPontoTuristico id={id} />
        </div> 
      </>
  );
}

export default Register;
