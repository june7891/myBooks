import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
        <nav>
        <img src={logo} alt="logo" />
        <ul className='menu'>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/login">Connexion</Link></li>
            <li><Link to="/logout">Deconnexion</Link></li>
         
        </ul>
        </nav>
    </>
  )
}

export default Navbar