import React from 'react'
import { useState, useContext, useRef } from 'react';
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';
import {AiFillFacebook, AiFillCloseCircle } from 'react-icons/ai';

import Modal from 'react-modal';
import { UserContext } from '../context/userContext';

function Register() {

  const { signUp } = useContext(UserContext);

  const navigate = useNavigate();

  console.log(signUp);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [validation, setValidation] = useState("");

  const inputs = useRef([]);

  const addInputs = el => {
    if(el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  }

  const formRef = useRef();

  
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleForm = async (e) => {
    e.preventDefault();
    console.log(inputs);

    if((inputs.current[1].value.length || inputs.current[2].value.length) < 6 ) {
      setValidation("6 caractères min");
      return;
    } else if(inputs.current[1].value !== inputs.current[2].value) {
      setValidation("Les mots de passe ne correspondent pas");
      return;
    }

    try {
    const cred = await signUp(
      inputs.current[0].value,
      inputs.current[1].value
    )
    formRef.current.reset();
   

    setValidation("");
    setIsOpen(false);
    navigate("/private/private-home");
  } catch (error) {
    if(error.code === "auth/invalid-email") {
      setValidation('Le format email incorrect')
    }

    if(error.code === "auth/email-already-in-use") {
      setValidation("Adresse email déjà utilisé!")
    }
  }

  }

  


  return (
    <>
    <Navbar/>
    <section className='register'>
    <h2>Créer un compte</h2>
    <button className='btn-primary'><FcGoogle/> Continuer avec Gmail</button>
    <button className='btn-primary'> <AiFillFacebook/> Continuer avec Facebook</button>
    <button className='btn-primary' onClick={openModal}>Continuer avec votre e-mail</button>

            <p>Vous avez déjà un compte?</p> <Link to="/login">Se connecter</Link>
            
    </section>

    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <h2>Inscription</h2>
        <div className='btn-close'> <AiFillCloseCircle onClick={closeModal} /></div>
  
      
        <form 
        ref={formRef}
        onSubmit={handleForm} 
        className='signup-form'>
          <input 
        
          ref={addInputs}
          type="email" 
          name='email' 
          required 
          placeholder='email'
          id='signUpEmail' />

          <input 
             ref={addInputs}
          type="password"
          name='password'
          required 
          placeholder='Mot de passe'/>

          <input 
          ref={addInputs}
          type="password"
          name='password' 
          placeholder='Repeter mot de passe' />

          <p className='validation-msg'>{validation}</p>
         
          <button className='btn-primary'>S'inscrire</button>
        </form>
      </Modal>
    
    </>
  )
}

export default Register