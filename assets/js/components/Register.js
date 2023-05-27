import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <>
    <Navbar/>
    <section className='login'>
    <h2>Inscription</h2>

            <form action="" className='login-form'>
            <input type="text" />
            <input type="password" name="" id="" />
            <button className='btn-primary'>S'inscrire</button>
            <Link to="/login">Se connecter</Link>
        </form>
    </section>
    
    </>
  )
}

export default Register