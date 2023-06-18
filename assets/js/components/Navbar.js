import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useAuthState} from 'react-firebase-hooks/auth';
import { auth } from '../../utils/firebase';
import { signOut } from 'firebase/auth';

function Navbar() {
  const [user, loading] = useAuthState(auth);

  const logOut = async () => {
    try {
        await signOut(auth)
        navigate("/");
        console.log("i'm in")
        
    } catch (error) {
        alert('Ooops! Veuillez reessayer!')
    }
}

  return (

    
    <>
     
        <nav>
        <Link to="/"><img className='logo' src={logo} alt="logo" /></Link>
        
            
            {!user && (
              <div>
           
                <Link to="/login"><button className='btn-primary'>Connexion</button></Link>
              </div>
             
               
            )}
            
            {user && (
           <div>
           <h2>{user.displayName}</h2>
            <Link to="/dashboard"><img  className="profile-pic" src={user.photoURL} alt="avatar" /></Link>
            <button className='btn-primary' onClick={logOut}>Deconnexion</button>
            
           </div>
           
           

            )}
            
         
       
        </nav>
    </>
  )
}

export default Navbar