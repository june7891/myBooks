import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    <Navbar/>
    <section className='login'>
    <h2>Connexion</h2>

            <form action="" className='login-form'>
            <input type="text" />
            <input type="password" name="" id="" />
            <button className='btn-primary'>Se connecter</button>
            <Link to="/login">S'inscrire</Link>
        </form>
    </section>
    
    </>
  )
}

export default Login