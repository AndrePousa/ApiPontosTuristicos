import React from 'react';
import './styles.css';
import tupa from '../../images/tupa.jpg';


const Logo = () => {
  return(
    <div className="logoContainer">
      <img className="logo" src={tupa} />
    </div>
  )
}

export default Logo;