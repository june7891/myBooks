import React, {useContext} from 'react'
import { UserContext } from '../context/userContext'
import avatar from "../../images/avatar.jpg"

function Homepage() {

  const {currentUser} = useContext(UserContext);
  // console.log(currentUser.displayName);

  return (
    <>
    <nav>
    {currentUser ? 
        <div>coucou toi!</div> : <img className='avatar' src={avatar} alt="avatar" />
    
    }
   </nav>
            <section className='hero'>
    <h1>myBooks</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque qui vero esse quasi, nemo molestias officiis id ipsam aliquam 
    eligendi saepe optio odit deserunt repellendus inventore autem maxime recusandae dolores?</p>
 <a href="/login"><button className='btn-primary'>Connexion</button></a>

 
    </section>

    </>
  )
}

export default Homepage