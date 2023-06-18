import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { signOut } from 'firebase/auth';

function Dashboard() {

    // const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    
    const logOut = async () => {
        try {
            await signOut(auth)
            navigate("/");
            console.log("i'm in")
            
        } catch (error) {
            alert('Ooops! Veuillez reessayer!')
        }
    }

    // if(loading) return <h1>Loading...</h1>;

   

       return (
   <>
    {/* <h1>Bienvenue sur ton profil, {user.displayName}</h1> */}
    <button className='btn-primary' onClick={logOut}>Deconnexion</button>
   </>
  )  

 
 
}

export default Dashboard