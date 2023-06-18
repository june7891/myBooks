import React, {useState, useRef, useContext} from 'react'
import { UserContext } from '../context/userContext';
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc';
import {AiFillFacebook, AiFillCloseCircle } from 'react-icons/ai';
import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import {auth} from '../../utils/firebase';
import Modal from 'react-modal';

function Login() {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [validation, setValidation] = useState("");
  const { signIn } = useContext(UserContext);

  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
     navigate('/private/private-home');
    } catch (error) {
      console.log(error);
    }
  }
  const facebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      console.log(result.user);
     navigate('/private/private-home');
    } catch (error) {
      console.log(error);
    }
  }

    
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const inputs = useRef([]);
  const formRef = useRef();


  const addInputs = el => {
    if(el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  }

  const handleForm = async (e) => {
    e.preventDefault();
   

    try {
    const cred = await signIn(
      inputs.current[0].value,
      inputs.current[1].value
    )
    // formRef.current.reset();
   

    setValidation("");
    setIsOpen(false);
    navigate("/private/private-home");
  } catch {
    setValidation("Oops, identifiant et/ou mot de passe incorrect!")
    
  }

  }

  return (
    <>
    <Navbar/>
    <section className='login'>
    <h2>Connexion</h2>

    <button onClick={googleLogin} className='btn-primary'><FcGoogle/> Continuer avec Gmail</button>
    <button onClick={facebookLogin} className='btn-primary'> <AiFillFacebook/> Continuer avec Facebook</button>
    <button className='btn-primary' onClick={openModal}>Continuer avec votre e-mail</button>
            <Link to="/register">S'inscrire</Link>
     
    </section>
    

    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <h2>Connexion</h2>
        <div className='btn-close'> <AiFillCloseCircle onClick={closeModal} /></div>
  
      
        <form 
        ref={formRef}
        onSubmit={handleForm} 
        className='login-form'>
          <input 
        
          ref={addInputs}
          type="email" 
          name='email' 
          required 
          placeholder='email'
          id='signInEmail' />

          <input 
             ref={addInputs}
          type="password"
          name='password'
          required 
          placeholder='Mot de passe'/>


          <p className='validation-msg'>{validation}</p>
         
          <button className='btn-primary'>Se connecter</button>
        </form>
      </Modal>
    </>
  )
}

export default Login